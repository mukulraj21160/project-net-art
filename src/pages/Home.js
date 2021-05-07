import React from "react";
import Award from "../components/Award";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";

const Home = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(rgb(255,254,247) 0%, rgb(255,252,213) 50%, rgb(255,249,177) 100%)",
      }}
    >
      <Header />
      <Award />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
