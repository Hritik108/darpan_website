import React from "react";
import "../../assets/styles/contactusform.css";
import $ from "jquery";

//ICONS
import {FaInstagram}  from "@react-icons/all-files/fa/FaInstagram";
import {FaYoutube}  from "@react-icons/all-files/fa/FaYoutube";
import {FaFacebookSquare}  from "@react-icons/all-files/fa/FaFacebookSquare";

function Contactusform() {
  async function load_messages() {
    let name = $("#name").val();
    let number = $("#phone_number").val();
    let email = $("#email").val();
    let address = $("#address").val();
    let comments = $("#comments").val();
    var data = {
      name: name,
      number: number,
      email: email,
      address: address,
      comments: comments,
    };
    console.log(data);
    (async () => {
      const rawResponse = await fetch("/get_data", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const content = await rawResponse.json();

      console.log(content);
    })();
  }

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Contactusform">
      <div className="contactdesc">
        <h1>Contact Details!</h1>
        <h3>Address:</h3>
        <address>
          Gauranga Little Rays Nursery, Shop No. 3 Shree Laxmi Co. Op.HSG
          Society Ltd. Mavji Laxmi Nalwala Chawl,S.S. Amruthwar Marg, Worli,
          Mumbai. 400013
        </address>
        <h3>Contact Number:</h3>
        <address>+91 7506229401</address>

        <h3>Email:</h3>
        <address>sallagargivikhil123@gmail.com</address>
        <h3>Our Socia Media:</h3>
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
      <form className="contactform" onSubmit={onSubmit}>
        <h1 id="form-heading">Get in Touch</h1>
        <div className="Contactusform0 contact-input">
          <input id="name" type="text" placeholder="Your name.." required />
        </div>

        <div className="Contactusform1 contact-input">
          <input
            id="phone_number"
            type="tel"
            placeholder="Your number.."
            maxlength="10"
            required
          />
        </div>

        <div className="Contactusform2 contact-input">
          <input
            className="contact-input"
            id="email"
            type="email"
            placeholder="email.."
            required
          />
        </div>
        <div className="Contactusform3 contact-input">
          <input type="text" id="address" placeholder="Your place.." required />
        </div>
        <div className="Contactusform4 contact-input">
          <textarea
            id="comments"
            placeholder="Any Comment"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <button className="contactus-button" onClick={() => load_messages()}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contactusform;
