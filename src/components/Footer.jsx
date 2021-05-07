import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import BrowserIcon from "@material-ui/icons/Language";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#ec3237",
    color: "#fff",
    padding: "5px 0px 15px 0px",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "#ec3237",
      color: "#fff",
      padding: "30px 0px 30px 0px",
      alignItems: "center",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "#ec3237",
      color: "#fff",
      padding: "50px 0px 50px 0px",
      alignItems: "center",
    },
  },
  footer: {
    display: "flex",
    padding: "10px 0px 0px 15px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  icon: {
    fontSize: "18px",
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "27px",
    },
  },
  text: {
    fontSize: "12px",
    [theme.breakpoints.up("md")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "17px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container item>
        <Grid item lg={12} md={12} xs={12} className={classes.main}>
          <div className={classes.footer}>
            <PhoneIcon className={classes.icon} />
            <Typography className={classes.text}>
              Toll Free{" "}
              <span style={{ fontWeight: "bold" }}>1800 200 1234</span>
            </Typography>
          </div>
          <div className={classes.footer}>
            <FacebookIcon className={classes.icon} />
            <Typography className={classes.text}>
              www.facebook.com/cripumps
            </Typography>
          </div>
          <div className={classes.footer}>
            <BrowserIcon className={classes.icon} />
            <Typography className={classes.text}>www.crigroups.com</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
