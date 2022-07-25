import React from "react";
import "../assets/styles/footer.css";
import Logo from "../assets/images/darpan_logo.png";
import {FaInstagram}  from "@react-icons/all-files/fa/FaInstagram";
import {FaYoutube}  from "@react-icons/all-files/fa/FaYoutube";
import {FaFacebookSquare}  from "@react-icons/all-files/fa/FaFacebookSquare";
import {HiOutlineMail}  from "@react-icons/all-files/hi/HiOutlineMail";
import {FaPhone}  from "@react-icons/all-files/fa/FaPhone";
import {HiOutlineLocationMarker}  from "@react-icons/all-files/hi/HiOutlineLocationMarker";

import { Button } from "@mui/material";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-details">
          <div className="footer-items">
            <img id="logo" src={Logo} alt="logo" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="footer-items">
            <h3 id="links-header">Useful Links</h3>
            <ul className="footer-links">
              <li>
                {" "}
                <a href="#">Home</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">About Us</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Events</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#"> Contact Us</a>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <h3 id="links-header">ABC</h3>
            <ul className="footer-links">
              <li>
                {" "}
                <a href="#">Home</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">About Us</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Events</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#"> Contact Us</a>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <h3 id="links-header">CONTACT</h3>
            <ul className="footer-links">
              <li>
                <HiOutlineMail className="contact-icon"  style={{fontSize:"20px"}} /> darpanworli@gmail.com{" "} 
              </li>
              <li>
                {" "}
                <FaPhone className="contact-icon" /> +91 8454077945{" "}
              </li>
              <li>
                {" "}
                <HiOutlineLocationMarker className="contact-icon" style={{fontSize:"24px"}} />
                <a id="location" href="https://maps.app.goo.gl/5Sgi4MQtqx9oykum8" target="_blank"> <Button
                  variant="contained"
                  style={{ backgroundColor: "#06283D" }}
                >
                  Location
                </Button>
                </a>
              </li>
            </ul>
            <p>Please Follow us on our social media platform</p>
            <div className="social-media">
              <a
                href="https://instagram.com/darpan_worli?igshid=YmMyMTA2M2Y="
                target="_blank"> <FaInstagram className="icons" style={{fontSize:"25px"}} />
                
              </a>
              <a
                href="https://www.youtube.com/channel/UCFkt3MlyuRUpGXfIe3zlGGw"
                target="_blank"
              >
                <FaYoutube className="icons" style={{fontSize:"25px"}} />
              </a>

              <a href="">
                <FaFacebookSquare className="icons" style={{fontSize:"25px"}} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright &copy; Darpan Worli 2022. All rights reserved.
        </div>
      </div>
    );
  }
}

export default Footer;
