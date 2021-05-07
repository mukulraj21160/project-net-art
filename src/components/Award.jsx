import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import award from "../assets/1.png";
import image from "../assets/2.png";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  award: {
    width: "55%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },
  heading: {
    fontWeight: 700,
    fontSize: "12px",
    [theme.breakpoints.up("md")]: {
      fontWeight: 700,
      fontSize: "12px",
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      fontWeight: 700,
      fontSize: "16px",
      textAlign: "left",
    },
  },
  img: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },
  sub_heading: {
    fontSize: "11.5px",
    textAlign: "left",
    paddingLeft: "10px",
    [theme.breakpoints.up("md")]: {
      fontSize: "12px",
      textAlign: "left",
      paddingLeft: "15px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15px",
      textAlign: "left",
      paddingLeft: "25px",
    },
  },
  bullets: {
    fontSize: "8px",
    [theme.breakpoints.up("md")]: {
      fontSize: "8px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "12px",
    },
  },
}));

const Award = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container item className={classes.main}>
        <Grid lg={4} md={4}>
          <img src={award} alt="award" className={classes.award} />
        </Grid>
        <Grid item lg={8} md={8}>
          <Typography className={classes.heading}>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </Typography>
          <Typography className={classes.sub_heading}>
            <FiberManualRecordIcon className={classes.bullets} /> C.R.I.'s
            energy efficient products are well recognized by various Government
            Institutions, as trustworthy products for various projects across
            the globe to save energy.
          </Typography>
          <Typography className={classes.sub_heading}>
            <FiberManualRecordIcon className={classes.bullets} /> C.R.I. is the
            highest contributor in the country for the projects of EESL (Energy
            Efficiency Services Limited) to replace the old inefficient pumps
            with 5 Star rated energy efficient smart pumps with IoT enabled
            control panel.{" "}
          </Typography>
          <img src={image} alt="img" className={classes.img} />
          <Typography className={classes.sub_heading}>
            Government of India has awarded the{" "}
            <span style={{ fontWeight: "bold" }}>
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Award;
