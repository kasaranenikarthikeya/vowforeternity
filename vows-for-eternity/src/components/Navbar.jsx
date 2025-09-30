import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <div className="logo"><a href="/">Vows for Eternity</a></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/wellness">Wellness</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  );
}
