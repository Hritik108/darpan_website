import React from "react";
import "../../assets/styles/contactusform.css";
import $ from "jquery";

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
          <h1>Get in Touch</h1>
          <p>Please fill the form below to contact us<br/>
          Please fill the form below to contact us<br/>
          Please fill the form below to contact us<br/>
          Please fill the form below to contact us<br/>
          </p>
        </div>
      <form className="contactform" onSubmit={onSubmit}>

        <div className="Contactusform0 contact-input">
          <input id="name" type="text" placeholder="Your name.." />
        </div>

        <div className="Contactusform1 contact-input">
          <input
            id="phone_number"
            type="tel"
            placeholder="Your number.."
            maxlength="10"
          />
        </div>

        <div className="Contactusform2 contact-input">
          <input
            className="contact-input"
            id="email"
            type="email"
            placeholder="email.."
          />
        </div>
        <div className="Contactusform3 contact-input">
          <input type="text" id="address" placeholder="Your place.." />
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
