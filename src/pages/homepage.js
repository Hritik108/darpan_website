import React from "react";
import HomeIndex from "../components/home/homeIndex";
import HomeTestimonial from "../components/home/testimonial";
import Services from "../components/home/services.js";
import Navbar from "../components/navbar";

//IMAGES
import Background from "../assets/images/main6.jpg";

class HomePage extends React.Component {
  render() {
    return (
      <div>
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
