import React from "react";

class Appointment extends React.Component {
  render() {
    return (
      <div className="Appointment">
        <div className="Career-left">
          <div>
            <p>Confused about Career Choices</p>
          </div>
          <div>
            <button>Book an Appointment</button>
          </div>
        </div>

        <div className="Career-right">
          <div className="Career-right-list">
          <ul>
         <li>Beetroot</li>
         <li>Ginger</li>
         <li>Potato</li>
         <li>Radish</li>
      </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
