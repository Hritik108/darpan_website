import React from "react";
import "../../assets/styles/appointment.css";
import thinking from "../../assets/images/thinking.jpg";
// import counsell from "../../assets/images/thinking.png";
import guidance from "../../assets/images/guidance.jpg";
import mentoring from "../../assets/images/mentoring.jpg";
import EQ from "../../assets/images/EQ.jpg";
import IQ from "../../assets/images/IQ.jpg";

// import monk from "../../assets/images/monk.jfif";
import { Button } from "@mui/material";
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
              <h3 className="Appointment-right-moto">
                Confused about <br />
                Career Choices?
              </h3>
              <p className="Appointment-right-moto-desc">
                Nowadays there are a lot of career options to choose from, to
                choose what's the best for you or finding out the right one that
                suits you has become a crack of a task. Nevertheless, you don't
                have to worry about it, with us, it's now going to be a child's
                play. Click the below button to get on-boarded on the track to
                success.
              </p>
            </div>

            <div className="Appointment-right-button">
              {/* <button>Book an Appointment</button> */}
              <a
                href="/Contact"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#06283D", position: "static" }}
                >
                  Book an Appointment
                </Button>
              </a>
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
              <p>
                Right advice and guidance at the turning points of life are like
                the full moon days of a year, which is a privilege to possess.
                Proper Mentoring and suggestions become the base of the building
                of success & accelerate a person to reach the top of the world
                of achievements. Darpan worli has vowed to provide the best
                guidance possible to the youth seeking it.
              </p>
              <a href="/Contact">
                <button className="service-buttons">Get in Touch</button>
              </a>
            </div>
          </div>

          <div className="Appointment-services2">
            <div className="Appointment-services2-2 Appointment-services-desc">
              <h1>One to One Mentoring</h1>
              <p>
                Right advice and guidance at the turning points of life are like
                the full moon days of a year, which is a privilege to possess.
                Proper Mentoring and suggestions become the base of the building
                of success & accelerate a person to reach the top of the world
                of achievements. Darpan worli has vowed to provide the best
                guidance possible to the youth seeking it.{" "}
              </p>
              <a href="/Contact">
                <button className="service-buttons">Get in Touch</button>
              </a>
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
              <p>
                The emotional quotient is the ability of an individual to deal
                with emotions while interacting with people in our daily life,
                it becomes vital for every self to be empathic, responsive &
                listen carefully to others. All such qualities are traits of a
                high EQ level which are now one of the most desired skills in
                corporates as well as in personal life. EQ helps in life-making
                & adds value to every activity both personal and professional. &
                as it is said “IQ wins the race, EQ wind the life”
              </p>
              <a href="/Contact">
                <button className="service-buttons">Get in Touch</button>
              </a>
            </div>
          </div>

          <div className="Appointment-services2">
            <div className="Appointment-services2-2 Appointment-services-desc">
              <h1>Improving Intelligence Quotient</h1>
              <p>
                The term IQ has been around the corner in recent years, research
                has shown the higher the IQ level the more intelligent the
                person is. Everyone nowadays wishes to have a higher IQ which is
                only possible through Reading, Exploring g and continuous
                learning At darpan worli, we take care of every individual's
                growth academically and personally which helps improve IQ as
                well as EQ
              </p>
              <a href="/Contact">
                <button className="service-buttons">Get in Touch</button>
              </a>
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
