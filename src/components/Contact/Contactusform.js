import React from "react";
 import "../../assets/styles/contactusform.css";
// import thinking from "../../assets/images/thinking.png";
// import { Button } from "@mui/material";
class Contactusform extends React.Component {
  render() {
    return (
      <div className="Contactusform">
       <h1>Contact</h1>
      
       <form>
      
      <div className="Contactusform1">

        <div>
      <label>Enter your name:&nbsp;
      &nbsp;&nbsp;
        <input type="text"  placeholder="Your name.."/>
      </label>
      </div>
       
       <div>
      <label>Phone Number:
        <input type="tel"  placeholder="Your number.." pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="10" />
      </label>
      </div>

</div>

<div  className="Contactusform2">
<label>Enter your Email:
        <input type="email"  placeholder="email.."/>
      </label>
</div>

<div className="Contactusform3">
<label>Enter your Place:
        <input type="text"  placeholder="Your place.."/>
      </label>
</div>

<div className="Contactusform4">
<label>Comment:
        {/* <input type="text"  placeholder="Comment.." /> */}
      </label>
        <textarea  rows="9" cols="60"></textarea>
</div>

    </form>

      </div>
    );
  }
}

export default Contactusform;