import React from "react";
import morska from "./images/seafood.jpg";
import Sidenav from "./Sidenav";
import Footer2 from "./Footer2";
import pita from "./images/pie.jpg";
import pomfri from "./images/fries.jpg";
export default function Menu() {
  return (
    <div className="menu" id="menu">
      <Sidenav></Sidenav>
      <img src={morska} className="skamp" />
      <h1 className="naslovmenu"> MENU</h1>
      <h2 className="podnaslovmenu">SEAFOOD IS OUR SPECIALITY</h2>
      <div>
        <h2 className="dessert">DESSERT</h2>
        <hr className="crna2" />
        <p className="tekstmenu">Shoestring Chips </p>{" "}
        <p className="tekstmenu2">Island Rhubarb / Granny Smith Apple</p>
        <p className="podtekstmenu">chilli salt, garlic mayonnaise Terrine</p>
        <p className="podtekstmenu2">vanilla anglaise</p>
        <p className="cijena">$7.50</p>
        <p className="cijena2">$14</p>
        <div className="roditelj">
          <div className="dijete1">
            <img src={pomfri} className="hranamenu" />
          </div>
          <div className="dijete2">
            <img src={pita} className="hranamenu" />
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  );
}
