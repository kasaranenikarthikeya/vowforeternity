import { useState, useRef } from "react";
import "../styles/ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
