import React from "react";
import Navbar from "../components/navbar";
import Appointment from "../components/Career/Appointment";

class Career extends React.Component {
  render() {
    return (
      <div className="Career">
        <Appointment />
      </div>
    );
  }
}

export default Career;