import React from "react";
import "../../assets/styles/Home/homeindex.css";
import { Button } from "@mui/material";
import jQuery from "jquery";
import Mountain from "../../assets/images/Mountain.jpeg";
import D1 from "../../assets/images/D1.jpg";

class Homeindex extends React.Component {
  render() {
    return (
      <div className="index-main">
        <div className="index-description">
          <div className="desc-main">
            {/* <h3>DARPAN WORLI</h3> */}
            <h1>
              KNOW <strong>YOURSELF</strong>, <br />
              KNOW YOUR <strong>POTENTIAL</strong>
            </h1>
          </div>
          <div className="desc-sub">
            <p>
              Darpan is a youth club empowered by its members with enthusuiasm
              to contribute towards the academic, personal, social &amp;
              cultural development of individuals by inclucating the right
              education & guidance
            </p>
          </div>
          <div className="index-buttons">
            <Button
              variant="contained"
              style={{ backgroundColor: "#06283D", position: "static" }}
            >
              KNOW MORE
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#06283D", position: "static" }}
            >
              ASK US ANYTHING
            </Button>
          </div>
        </div>
        <div className="index-image">
          <img src={D1} />
        </div>
      </div>
    );
  }
}

export default Homeindex;
