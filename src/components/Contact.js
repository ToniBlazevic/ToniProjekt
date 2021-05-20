import React from "react";
import Sidenav from "./Sidenav";
import Footer3 from "./Footer3";

import Forma from "./Forma";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <Sidenav></Sidenav>

      <div className="naslovcon">
        <h1> CONTACT US</h1>
      </div>
      <Forma></Forma>
      <Footer3></Footer3>
    </div>
  );
}
