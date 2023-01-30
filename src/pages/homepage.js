import React from "react";
import HomeIndex from "../components/home/homeIndex";
import HomeTestimonial from "../components/home/testimonial";
import Services from "../components/home/services.js";
import Navbar from "../components/navbar";
import { Helmet } from "react-helmet-async";

//IMAGES
import Background from "../assets/images/main6.jpg";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Darpan Worli | Know Yourself Know Your Potential</title>
          <meta
            name="description"
            content="Darpan Worli is youth group from Worli Mumbai working towards academic growth, professional well being and character building of youngsters. Darpan Worli currently has over 100 active volunteers. It has impacted lives of many students and is growing continuously"
          />
          <link rel="canonical" href="https://www.darpanworli.in/" />
          <link rel="canonical" href="https://www.darpanworli.in/home" />
          <meta
            name="keywords"
            content=" dapran ,worli ,Darpan , Worli , IYS Worli , Career Counseling"
          />
        </Helmet>
        <div
          style={{ backgroundImage: `url(${Background})` }}
          className="Home-page"
        >
          <Navbar />
          <HomeIndex />
        </div>
        <Services />
        <HomeTestimonial />
      </div>
    );
  }
}

export default HomePage;
