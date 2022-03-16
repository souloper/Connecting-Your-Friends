import React from "react";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { makeStyles } from "@material-ui/core/styles";
import "firebase/app";

import { auth } from "../firebase";
import firebase from "firebase/compat/app";


import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heroContent: {
    marginTop: theme.spacing(4),
    color: "#fff",
  },
  footer: {
    color: "#fff",
    textAlign: "center",
    position: "fixed",
    width: "100%",
    bottom: "0px",
  },
}));


const Login = () => {

  const classes = useStyles();

  return (
    <div id="login-page">
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#fff"
            gutterBottom
            style={{ fontFamily: "Samarkan", fontSize: "5.5rem", textShadow: "5px 5px 10px black" }}
          >
            Namaste!
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md"></Container>
      <div id="login-card">
        <h1 style={{ fontFamily: "Major Mono Display", letterSpacing: "-3px" }}>
          Connecting Your Friends!
        </h1>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookFilled /> Sign in with Facebook
        </div>
      </div>
      <p className={classes.footer}>
        Developed with &#128150; by{" "}
        <a
          href="/About"
          style={{
            textDecoration: "none",
            color: "#fff",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          SOUMYA
        </a>
      </p>
    </div>
  );
};

export default Login;
