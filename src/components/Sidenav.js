import React from "react";
import { Link } from "react-router-dom";
import logo1 from "./images/logo.png";
import fb from "./images/fblogo.png";
export default function Sidenav() {
  return (
    <div class="sidenav">
      <img src={logo1} className="logo1" />
      <br />
      <br />
      <hr />
      <Link to="/">HOME</Link>
      <a href="#about">ABOUT US</a>
      <Link to="/menu">MENU</Link>
      <Link to="/Contact">CONTACT US</Link>
      <a href="#hiring">WE ARE HIRING</a>
      <hr />
      <p className="mali">
        Our opening hours may vary depending on the season and events
      </p>
      <hr />
      <Link to="/">
        <img src={fb} className="fb" />
      </Link>
      <p className="mali">Copyright © Harry's Restaurant</p>
    </div>
  );
}
