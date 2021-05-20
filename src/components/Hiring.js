import React from "react";
import chef from "./images/chef.jpg";
export default function Hiring() {
  return (
    <div className="hiring" id="hiring">
      <div className="kuvar">
        <img src={chef} className="chef" />
      </div>
      <div className="txt">
        <h1 className="dobrodosli2">Work with us</h1>
        <h1 className="naslov3">POSITIONS OPEN </h1>

        <hr className="crni2" />

        <p className="tekst2">
          Join Our Team!
          <br />
          <br />
          We are hiring:
          <br />
          <br />
          SOUS-CHEF!
          <br />
          <br />
          Kitchen hand and wait staff! Experience favoured! Availability on
          weekends and public holidays essential! - Please contact us in person,
          by phone or by email.
          <br />
          <br />
          We are hiring: CHEF / COOK! Contact us in person, by phone or via
          email! Join Our Team!
        </p>
      </div>
    </div>
  );
}
