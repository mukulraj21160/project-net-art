import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import logo from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  logo: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "95%",
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container item>
        <Grid item lg={4} md={4} xs={2}></Grid>
        <Grid item lg={4} md={4} xs={8} className={classes.main}>
          <img src={logo} alt="logo" className={classes.logo} />
        </Grid>
        <Grid item lg={4} md={4} xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default Header;
