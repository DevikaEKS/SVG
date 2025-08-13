
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Herosection.css";

export default function Herosection() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="hero">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#000000" } // Fallback bg
          },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#fa6e43" },
            links: { enable: false },
            move: { enable: true, speed: 1, random: true, straight: false },
            opacity: { value: 0.6 },
            size: { value: 3, random: true },
            shape: { type: "circle" },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          detectRetina: true,
        }}
        className="particles-bg"
      />

      {/* Overlay and Content */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Welcome to <span>Electcare</span>
          </h1>
          <h2>⚡ Power Your Future</h2>
          <p>
            Expert support for electrification, backed by timely
            services and genuine components.
          </p>
          <button className="hero-btn">EXPLORE ➜</button>
        </div>
      </div>
    </section>
  );
}
