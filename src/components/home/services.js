import React from "react";
import "../../assets/styles/appointment.css";
import thinking from "../../assets/images/thinking.png";
import music from "../../assets/images/music.png"
import speak from "../../assets/images/speak.png"
import math from "../../assets/images/math.png"
import buddha from "../../assets/images/Buddha.png"


import monk from "../../assets/images/monk.jfif";
import { Button } from "@mui/material";

class Services extends React.Component {
  render() {
    return (
      <div className="Appointment-services Appointment">
        <div className="Appointment-services1">
          <div className="Appointment-image">
            <img src={buddha} />
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
            One of our goals at Darpan Worli is to empower our members to become effective public speakers and leaders, We do this by enabling a supportive and positive community, where each member can grow confidence in public speaking while developing leadership skills. Since 2016, our club enabled numerous students to overcome their fear of public speaking and become excellent speakers, all this while forming a great bond with everyone.{" "}
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
            <h1>Music Classes</h1>
            <h4>
            Human being is naturally creative, musical and artistic. Before the children talk, they sing, before they write, they dream. 
As soon as they stand, they dance, Art is integral to the human expression”.
Songs or music can help us to become more imaginative, self-aware and collaborative citizens.
"Musical ability is not an inborn talent but an ability which can be developed. Anyone who is properly trained can develop musical ability, just as everyone develops the ability to speak their native language. 
Weekly group classes of various musical instruments, bring young students a social environment in which they learn from each other and create music together.
At Darpan Worli, students will experience the joy of collaboration and a social musical environment.{" "}
            </h4>
          </div>
        </div>

        <div className="Appointment-services2">
          <div className="Appointment-services2-2 Appointment-services-desc">
            <h1>Vedic Math</h1>
            <h4>
            Vedic Maths has its roots in ancient India and is a technique to solve complex mathematical problems fast & easy while boosting the analytical ability of learners.
Vedic Maths is India’s gift to the World just like Yoga and Ayurveda. By learning Vedic Maths you will be able to calculate much faster compared to the traditional system, which will not only make maths an enjoyable experience but it will make a remarkable difference to your confidence and self-esteem.{" "}
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
