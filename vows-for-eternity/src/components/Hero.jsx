import { useState, useRef } from "react";
import "../styles/Hero.css";
import HeroBg from "../assets/src/assets/watercolor-bg.jpg"; 

export default function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to Vows for Eternity</h1>
      <p>Find your perfect match with personalized matchmaking services.</p>
      <h2 className="About-head">About Us</h2>
      <p>We focus on meaningful relationships and personalized matchmaking services globally.</p>
    </section>
  );
}
