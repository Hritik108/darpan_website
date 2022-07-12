import React from "react";
import "../../assets/styles/appointment.css";
import thinking from "../../assets/images/thinking.png";
import music from "../../assets/images/music.png"
import speak from "../../assets/images/speak.png"
import math from "../../assets/images/math.png"

import monk from "../../assets/images/monk.jfif";
import { Button } from "@mui/material";

class Services extends React.Component {
  render() {
    return (
      <div className="Appointment-services Appointment">
        <div className="Appointment-services1">
          <div className="Appointment-image">
            <img src={monk} />
          </div>

          <div className="Appointment-services1-2 Appointment-services-desc">
            <h1>Bhagvad Gita Classes For Youth</h1>
            <h4>
              One-to-one mentoring is the traditional model of mentoring in
              which a more senior individual is paired with a more junior
              individual in order to provide the younger person with guidance,
              support, and encouragement{" "}
            </h4>
          </div>
        </div>

        <div className="Appointment-services2">
          <div className="Appointment-services2-2 Appointment-services-desc">
            <h1>Public Speaking Club</h1>
            <h4>
              One-to-one mentoring is the traditional model of mentoring in
              which a more senior individual is paired with a more junior
              individual in order to provide the younger person with guidance,
              support, and encouragement{" "}
            </h4>
          </div>
          <div className="Appointment-image">
            <img src={speak} />
          </div>
        </div>

        <div className="Appointment-services1">
          <div className="Appointment-image">
            <img src={music} />
          </div>

          <div className="Appointment-services1-2 Appointment-services-desc">
            <h1>Music CLasses</h1>
            <h4>
              One-to-one mentoring is the traditional model of mentoring in
              which a more senior individual is paired with a more junior
              individual in order to provide the younger person with guidance,
              support, and encouragement{" "}
            </h4>
          </div>
        </div>

        <div className="Appointment-services2">
          <div className="Appointment-services2-2 Appointment-services-desc">
            <h1>Vedic Math</h1>
            <h4>
              One-to-one mentoring is the traditional model of mentoring in
              which a more senior individual is paired with a more junior
              individual in order to provide the younger person with guidance,
              support, and encouragement{" "}
            </h4>
          </div>
          <div className="Appointment-image">
            <img src={math} />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
