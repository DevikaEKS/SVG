import React from "react";
import integrityimg from "../assets/integrity.avif";
import innovationimg from "../assets/manandmachine.gif";
import moonimg from "../assets/repair.jpg";
import settingsimg from "../assets/machine.gif";
import customerimg from "../assets/settings-machines.gif";
import growthimg from "../assets/gif-hero.gif";
import sustainabilityimg from "../assets/controlpannel.avif";
import "./CoreValues.css";
const cards = [
  { title: "Integrity", img: integrityimg },
  { title: "Innovation", img: innovationimg },
  { title: "Quality", img: moonimg },
  { title: "Move Forward", img: settingsimg },
  { title: "Respect", img: sustainabilityimg },
  { title: "Responsibility", img: customerimg },
];

export default function CoreValues() {
  return (
    <div className="min-h-screen bg-black text-white py-5 px-5">
     <h1 className="core-title text-center ">OUR CORE VALUES</h1>
    <p class="text-center py-3">Machines, devices that use power to 
apply forces and control movement, 
are integral to modern society. They 
range from simple tools to complex 
automated systems, enabling us to 
perform tasks more efficiently and with 
greater precision. </p>
      <div className="grid md:grid-cols-3  grid-cols-1 gap-4 max-w-7xl mx-auto">
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </div>
  );
}

function Card({ title, img }) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-gray-900 core-card">
      <img
        src={img}
        alt={title}
        className="w-full h-60 object-cover opacity-80"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <h2 className="text-xl headingtxtpart">{title}</h2>
      </div>
    </div>
  );
}
