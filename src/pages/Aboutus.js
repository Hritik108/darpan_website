import React from "react";
import { Helmet } from "react-helmet-async";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/navbar";
class Aboutus extends React.Component {
  render() {
    return (
      <div className="Aboutus">
        <Helmet>
          <title>About us</title>
          <meta name="description" content="About darpan worli" />
          <link rel="canonical" href="https://www.darpanworli.in/about" />
          <meta
            name="keywords"
            content=" dapran ,worli ,Darpan , Worli , IYS Worli , Career Counseling"
          />
        </Helmet>
        <Navbar />
        <AboutUs />
      </div>
    );
  }
}

export default Aboutus;
