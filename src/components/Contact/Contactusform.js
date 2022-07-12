import React from "react";
 import "../../assets/styles/contactusform.css";
// import thinking from "../../assets/images/thinking.png";
// import { Button } from "@mui/material";
class Contactusform extends React.Component {
  render() {
    return (
      <div className="Contactusform">
       
       <form className="contactform">
      
       <div>
       <h1>Get in Touch</h1>
       <p>Please fill the form below to contact us</p>
      </div>

        <div className="Contactusform0 contact-input">
      {/* <label>Enter your name:&nbsp;
      &nbsp;&nbsp; */}
        <input type="text"  placeholder="Your name.."/>
      {/* </label> */}
      </div>
       
       <div  className="Contactusform1 contact-input">
      {/* <label>Phone Number: */}
        <input type="tel"  placeholder="Your number.." pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="10" />
      {/* </label> */}
      </div>


<div  className="Contactusform2 contact-input">
{/* <label>Enter your Email: */}
        <input className="contact-input" type="email"  placeholder="email.."/>
      {/* </label> */}
</div>

<div className="Contactusform3 contact-input">
{/* <label>Enter your Place: */}
        <input type="text"  placeholder="Your place.."/>
      {/* </label> */}
</div>

<div className="Contactusform4 contact-input">
{/* <label>Comment:
        
      </label> */}
      <textarea  placeholder="Any Comment" rows="4" cols="50"></textarea>
      {/* <input type="text area"  placeholder="Any Comment" rows="4" cols="50"/> */}
</div>

<button className="contactus-button">Submit</button>

    </form>

{/* <div class="container">  
  <form id="contact" action="" method="post">
    <h3>Colorlib Contact Form</h3>
    <h4>Contact us for custom quote</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    <p class="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
  </form>
</div> */}

      </div>
    );
  }
}

export default Contactusform;