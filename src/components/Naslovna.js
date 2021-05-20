import React from "react";
import Sidenav from "./Sidenav.js";
import Pocetna from "./Pocetna.js";
import About from "./About.js";
import Hiring from "./Hiring.js";
import Footer from "./Footer.js";
export default function Naslovna() {
  return (
    <div className="Naslovna">
      <Sidenav> </Sidenav>
      <Pocetna> </Pocetna>
      <About> </About>
      <Hiring> </Hiring>
      <Footer> </Footer>
    </div>
  );
}
