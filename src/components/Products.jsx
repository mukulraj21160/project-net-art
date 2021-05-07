import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import products from "../assets/3.png";

const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: "center",
  },
  heading: {
    fontSize: "14.5px",
    textAlign: "center",
    padding: " 15px 0px 15px 0px",
  },
  products_img: {
    width: "83%",
  },
  border: {
    borderTop: "2px solid #ec3237",
    padding: "15px 0px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  products_name: {
    fontSize: "15px",
    padding: "15px 0px",
  },
  title: {
    fontSize: "15px",
    fontWeight: "bold",
  },
  line: {
    color: "#ec3237",
    fontWeight: "bold",
  },
  all_products: {
    paddingTop: "15px",
  },
  sub_title: {
    fontSize: "14px",
  },
}));

const Products = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container item>
        <Grid item lg={12} className={classes.main}>
          <Typography className={classes.heading}>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </Typography>
          <img src={products} alt="products" className={classes.products_img} />
          <Typography className={classes.products_name}>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </Typography>
          <div className={classes.border}>
            <Typography className={classes.title}>
              C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </Typography>
            <div className={classes.all_products}>
              <Typography className={classes.sub_title}>
                CHEMICALS & PROCESS <span className={classes.line}>|</span> OILS
                & GAS <span className={classes.line}>|</span> POWER{" "}
                <span className={classes.line}>|</span> WATER & WASTE WATER{" "}
                <span className={classes.line}>|</span> PHARMA{" "}
                <span className={classes.line}>|</span> SUGARS & DISTILLERIES{" "}
                <span className={classes.line}>|</span> PAPER & PULP{" "}
                <span className={classes.line}>|</span> MARINE & DEFENCE{" "}
                <span className={classes.line}>|</span> METAL & MINING{" "}
                <span className={classes.line}>|</span> FOOD & BEVERAGE
              </Typography>
              <Typography className={classes.sub_title}>
                PETROCHEMICAL & REFINERIES{" "}
                <span className={classes.line}>|</span> SOLAR{" "}
                <span className={classes.line}>|</span> BUILDING{" "}
                <span className={classes.line}>|</span> HVAC{" "}
                <span className={classes.line}>|</span> FIRE FIGHTING{" "}
                <span className={classes.line}>|</span> AGRICULTURE &
                RESIDENTIAL
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
