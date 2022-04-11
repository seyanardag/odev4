import React, { Component } from "react";
import { Button, Col } from "react-bootstrap";
import "./pages.css";

export default class About extends Component {
  render() {
    return (
      <div className="aboutHead d-flex justify-content-center align-items-center">
        <div className="aboutCenter">
          <hr />
          <h1>THE HOTEL @ TIMES SQUARE</h1>
          <p>
            With our spacious, comfortable and decent hotel in a central
            location, your accommodation comfort will increase.
          </p>
          <hr />
          <p className="bottomParag">
            Our hotel with 22 luxury rooms is close to 9 Eylül University and
            Hasanağa Park, 14 km from Adnan Menderes Airport and 9 km from the
            bus station. Our luxury rooms have mini fridge, WI-FI, television,
            balcony, sitting area and breakfast service. If desired, we can rent
            rooms on a monthly basis.
          </p>
          <div className="buttonGroup d-flex justify-content-evenly mt-5">
            <div>
              <Button as={Col} variant="success">
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
