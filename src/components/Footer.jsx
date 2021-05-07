import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import BrowserIcon from "@material-ui/icons/Language";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#ec3237",
    color: "#fff",
    padding: "40px 0px 60px 0px",
    alignItems: "center",
  },
  footer: {
    display: "flex",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container item>
        <Grid item lg={12} className={classes.main}>
          <div className={classes.footer}>
            <PhoneIcon />
            Toll Free <span style={{ fontWeight: "bold" }}>1800 200 1234</span>
          </div>
          <div className={classes.footer}>
            <FacebookIcon />
            www.facebook.com/cripumps
          </div>
          <div className={classes.footer}>
            <BrowserIcon />
            www.crigroups.com
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
