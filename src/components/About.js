import React from 'react'
import image from "../me.jpg";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
//import Link from "@material-ui/core/Link";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  barStyle: {
    background: "#2196f3",
    width: "100%",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(11, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  avtar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: "auto",
    alignItems: "center",
    position: "static",
    top: "2rem",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

function About() {

    const classes = useStyles();

  return (
    <div className="chats-page">
      <AppBar className={classes.barStyle}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            className={classes.title}
            style={{ fontFamily: "Major Mono Display", letterSpacing: "-3px" }}
          >
            Connecting Your Friends
          </Typography>
          <Button edge="start" color="inherit" href="/">
            <HomeRoundedIcon />
          </Button>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              style={{ fontFamily: "Samarkan", fontSize: "6rem" }}
            >
              Namaste!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              style={{ fontSize: "1rem" }}
            >
              Hello, my name is Soumya Das. First and foremost, thank you for
              visiting and utilising our site. So, after so many days, I finally
              finished it. after much searching and stackoverflowing I'm not
              sure if you liked it or not, but the idea simply occurred to me
              and I started working on it. Any and all recommendations are
              appreciated. I wish you a wonderful day.
              <br />{" "}
              <span style={{ fontStyle: "italic" }}>--Have fun coding!</span>
            </Typography>

            <Avatar
              align="center"
              alt="Remy Sharp"
              src={image}
              className={classes.avtar}
            />

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<LinkedInIcon />}
                    style={{ background: "#0077B5" }}
                    href="https://www.linkedin.com/in/soumya--das/"
                    target="_blank"
                  >
                    LinkedIn
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    style={{ color: "black" }}
                    href="https://github.com/souloper"
                    target="_blank"
                  >
                    Github
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md"></Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Thanks for your visit!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Give a &#127775; on Github and connect with me on LinkedIn.
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
}

export default About