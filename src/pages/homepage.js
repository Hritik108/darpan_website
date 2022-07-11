import React from "react";
import HomeIndex from "../components/home/homeIndex";
import HomeTestimonial from "../components/home/testimonial";
import Services from "../components/home/services.js";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HomeIndex />
        <Services />
        <HomeTestimonial />
      </div>
    );
  }
}

export default HomePage;
