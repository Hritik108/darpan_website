import React from "react";
import { Button } from "@material-ui/core";

//css
import "../../assets/styles/Home/homeindex.css";

//IMAGES

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
              education &amp; guidance
            </p>
          </div>
          <div className="index-buttons">
            <a href="/About">
              <Button
                variant="contained"
                style={{ backgroundColor: "black", position: "static" }}
              >
                Know More
              </Button>
            </a>
            <a href="/Contact">
              <Button
                variant="contained"
                style={{ backgroundColor: "black", position: "static" }}
              >
                Ask Us Anything
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Homeindex;
