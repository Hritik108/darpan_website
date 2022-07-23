import React from "react";
import "../../assets/styles/appointment.css";
import thinking from "../../assets/images/thinking.png";
// import counsell from "../../assets/images/thinking.png";
import guidance from "../../assets/images/guidance.png";
import mentoring from "../../assets/images/mentoring.png";
import EQ from "../../assets/images/EQ.png";
import IQ from "../../assets/images/IQ.png";

// import monk from "../../assets/images/monk.jfif";
// import { Button } from "@mui/material@material-ui/core";
import { Button } from "@material-ui/core";
class Appointment extends React.Component {
  render() {
    return (
      <div className="Appointment">
        <div className="Appointment-top">
          <div className="Appointment-left">
            <img alt="desc" src={thinking} />
          </div>
          <div className="Appointment-right">
            <div>
              <p className="Appointment-right-moto">
                Confused about <br />
                Career Choices
              </p>
              <p className="Appointment-right-moto-desc">
                Mi arcu metus ad. Tellus tempor ornare convallis sodales
                vulputate. Felis inceptos taciti phasellus, aptent purus conubia
                cubilia! Fusce ad ante senectus consequat vel diam fames curae;
                odio feugiat quam eu. Dictum blandit, enim venenatis consectetur
                nam. Dictumst risus fringilla lacinia mattis eros suscipit
              </p>
            </div>

            <div className="Appointment-right-button">
              {/* <button>Book an Appointment</button> */}
              <Button
                variant="contained"
                style={{ backgroundColor: "#06283D", position: "static" }}
              >
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>

        <div className="Appointment-services">
          <div className="Appointment-services1">
            <div className="Appointment-image">
              <img alt="desc" src={guidance} />
            </div>

            <div className="Appointment-services1-2 Appointment-services-desc">
              <h1>Career Guidance</h1>
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
              <h1>One to One Mentoring</h1>
              <h4>
                One-to-one mentoring is the traditional model of mentoring in
                which a more senior individual is paired with a more junior
                individual in order to provide the younger person with guidance,
                support, and encouragement{" "}
              </h4>
            </div>
            <div className="Appointment-image">
              <img alt="desc" src={mentoring} />
            </div>
          </div>

          <div className="Appointment-services1">
            <div className="Appointment-image">
              <img alt="desc" src={EQ} />
            </div>

            <div className="Appointment-services1-2 Appointment-services-desc">
              <h1>Improving Emotional Quotient</h1>
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
              <h1>Improving Intelligence Quotient</h1>
              <h4>
                One-to-one mentoring is the traditional model of mentoring in
                which a more senior individual is paired with a more junior
                individual in order to provide the younger person with guidance,
                support, and encouragement{" "}
              </h4>
            </div>
            <div className="Appointment-image">
              <img alt="desc" src={IQ} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
