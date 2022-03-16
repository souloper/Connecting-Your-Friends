import React, { useRef, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CircularProgress from "@material-ui/core/CircularProgress";

import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  barStyle: {
    background: "#2196f3",
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const Chats = () => {
  
  const classes = useStyles();

    const history = useHistory();
    const { user } = useAuth();
    //console.log(user);

    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        await auth.signOut();
        
        history.push('/');
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' })
    }

    useEffect(() => {
        if(!user) {
            history.push('/');

            return;
        }

        axios
          .get("https://api.chatengine.io/users/me", {
            headers: {
              "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
              "user-name": user.email,
              "user-secret": user.uid,
            },
          })
          .then(() => {
            setLoading(false);
          })
          .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);

            getFile(user.photoURL).then((avatar) => {
              formdata.append("avatar", avatar, avatar.name);

              axios
                .post("https://api.chatengine.io/users/", formdata, {
                  headers: {
                    "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
                  },
                })
                .then(() => setLoading(false))
                .catch((error) => console.log(error));
            });
          });
    }, [user, history]);

    // if(!user || loading ) return 'Loading ...';
    if (!user || loading) return (
      <CircularProgress
        color="inherit"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          margin: "-50px 0px 0px -50px",
        }}
      />
    );

    return (
      <div className="chats-page">
        {/* <div className="nav-bar">
          <div className="logo-tab">Connecting Your Friends</div>
          <div onClick={handleLogout} className="logout-tab">
            Logout
          </div>
        </div> */}
        <AppBar position="static" className={classes.barStyle}>
          <Toolbar>
            <Typography
              variant="h5"
              className={classes.title}
              style={{ fontFamily: "Major Mono Display" ,letterSpacing: "-3px" }}
            >
              Connecting Your Friends
            </Typography>
            <Avatar
              alt={user.name}
              src={user.photoURL}
              className={classes.small}
            />
            <Button color="inherit" onClick={handleLogout}>
              <ExitToAppIcon />
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        <ChatEngine
          height="calc(100vh - 66px)"
          projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
          userName={user.email}
          userSecret={user.uid}
        />
      </div>
    );
}

export default Chats;