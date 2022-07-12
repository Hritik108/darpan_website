import React from "react";
import HomeIndex from "../components/home/homeIndex";
import HomeTestimonial from "../components/home/testimonial";
import Services from "../components/home/services.js";
import Navbar from "../components/navbar";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="Home-page">
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
