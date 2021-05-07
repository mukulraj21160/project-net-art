import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import logo from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: "95%",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container item>
        <Grid item lg={4}></Grid>
        <Grid item lg={4} className={classes.main}>
          <img src={logo} alt="logo" className={classes.logo} />
        </Grid>
        <Grid item lg={4}></Grid>
      </Grid>
    </div>
  );
};

export default Header;
