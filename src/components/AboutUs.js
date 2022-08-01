import React from "react";
import "../assets/styles/aboutus.css";
import growth from "../assets/images/diagram.png";
import calendar from "../assets/images/calendar.png";
import outreach from "../assets/images/expansion.png";
import network from "../assets/images/network.png";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-home">
        <div className="about-content">
          <div className="heading-main">
            <div className="heading-text">
              <h1>Our Story</h1>
            </div>
          </div>
        </div>
        <div className="timeline-container">
          <div className="timeline-main">
            <ul className="cbp_tmtimeline">
              <li>
                <time className="cbp_tmtime">
                  <span>2016</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-phone" id="about-icon">
                  <img
                    alt="Darpan Worli"
                    className="about-img"
                    src={calendar}
                  />
                </div>
                <div className="cbp_tmlabel">
                  <p>Inception</p>
                </div>
              </li>
              <li>
                <time className="cbp_tmtime">
                  <span>2018</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-phone" id="about-icon">
                  <img alt="Darpan Worli" className="about-img" src={growth} />
                </div>
                <div className="cbp_tmlabel">
                  <p>Growth</p>
                </div>
              </li>
              <li>
                <time className="cbp_tmtime">
                  <span>2020</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-phone" id="about-icon">
                  <img
                    alt="Darpan Worli"
                    className="about-img"
                    src={outreach}
                  />
                </div>
                <div className="cbp_tmlabel">
                  <p>Outreach</p>
                </div>
              </li>
              <li>
                <time className="cbp_tmtime">
                  <span>2022</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-phone" id="about-icon">
                  <img alt="Darpan Worli" className="about-img" src={network} />
                </div>
                <div className="cbp_tmlabel">
                  <p>Expansion</p>
                </div>
              </li>
            </ul>
            <div className="aboutus-descp">
              <h3>2016 :- Inception</h3>
              <p>This year marks the initiation/advent of the darpan worli with a vision of    offering the right knowledge & guidance to the youth of our country based on the vedic teachings. </p>
              <h3>2018 :- Growth</h3>
              <p> With Time more people join the darpan worli club, undergoing counselling and started their journey towards becoming the best version of themselves. </p>
              <h3> 2020 :- Outreach</h3>
              <p>Several education institutions collaborate with darpan worli recognizing the necessity of vedic education for the current generation, which can inculcate values, principles and lead them to the right direction in life.</p>
              <h3>2022 :- Digital expansion</h3>
              <p>Development & Launch of the Official website of Darpan Worli & Social Media Handles to create awareness of our activities, programs & teachings for the people seeking to know more about the right knowledge and guidance.</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
