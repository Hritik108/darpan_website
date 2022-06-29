import React from "react";
import "../../assets/styles/appointment.css"
import thinking from "../../assets/images/thinking.png"
import { Button } from '@mui/material';
class Appointment extends React.Component {
  render() {
    return (
      <div className="Appointment">
        <div className="Appointment-left">
         <img src={thinking}/>
        </div>
        <div className="Appointment-right">
          <div>
            <p>Confused about <br></br>Career Choices</p>
          </div>
         
          {/* <div className="Appointment-left-list">
          <ul>
         <li>One to One Counselling</li>
         <li>Learning Emotional Intelligence</li>
         <li>Improving IQ</li>
         <li>xyz</li>
      </ul>
          </div> */}

          <div className="Appointment-right-button">
            {/* <button>Book an Appointment</button> */}
            <Button variant="contained">Book an Appointment</Button>
          </div>
          
        </div>

      </div>
    );
  }
}

export default Appointment;
