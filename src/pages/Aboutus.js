import React from "react";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/navbar";
class Aboutus extends React.Component {
  render() {
    return (
      <div className="Aboutus">
        <Navbar />
        <AboutUs />
      </div>
    );
  }
}

export default Aboutus;