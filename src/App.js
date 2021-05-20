import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Naslovna from "./components/Naslovna";
import "./App.css";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Naslovna} />
        <Route exact path="/Menu" component={Menu} />
        <Route exact path="/Contact" component={Contact} />
      </Router>
    </div>
  );
}
