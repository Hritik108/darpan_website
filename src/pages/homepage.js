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
          <title>Home page</title>
          <meta name="description" content="Reach us darpan worli" />
          <link rel="canonical" href="/Home" />
          <meta
            name="keywords"
            content="Darpan , Worli , IYS Worli , Career Counseling"
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
