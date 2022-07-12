import React from "react";
import Contactusform from "../components/Contact/Contactusform";
import Navbar from "../components/navbar";
class Contactus extends React.Component {
  render() {
    return (
      <div className="Contactus">
        <Navbar />
        <Contactusform />
      </div>
    );
  }
}

export default Contactus;
