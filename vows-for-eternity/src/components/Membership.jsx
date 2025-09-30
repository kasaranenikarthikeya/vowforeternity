import { useState, useRef } from "react";
import "../styles/Membership.css";

export default function Membership() {
  return (
    <section className="membership">
      <h2>Membership Options</h2>
      <ul>
        <li>Base Membership: $2800 – 6 months</li>
        <li>Premium Membership: $4200 – 12 months</li>
        <li>Exclusive Club: Contact for pricing</li>
      </ul>
    </section>
  );
}
