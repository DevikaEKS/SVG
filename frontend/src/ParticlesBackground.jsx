import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { TypeAnimation } from "react-type-animation";
import "./App.css";
import { color } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: { color: "#16171a" },
      fpsLimit: 40,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#f1f1f1" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: { enable: true, outModes: { default: "bounce" }, speed: 6 },
        number: { density: { enable: true, area: 1080 }, value: 200 },
        opacity: { value: { min: 0.1, max: 0.5 } },
        shape: { type: "circle" },
        size: { value: { min: 0.5, max: 1.5 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="relative w-full h-screen">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="absolute inset-0"
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6">
        
        {/* Left Side - Typing Text */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <TypeAnimation
            sequence={["Contact Us", 1000]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "white" }}
          />
          <p className="text-gray-300 mt-4">
           Got a <span style={{color:"#fa6e43"}}><b>machine that needs care?</b></span> Whether it’s repairs or maintenance <br/>we’ve got you covered. Fill out the form and our team will get back to you !
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 bg-black bg-opacity-60 p-6 rounded-lg shadow-lg w-full max-w-md">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 my-2"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 my-2"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 my-2"
              required
            ></textarea>
            <button
  type="submit"
  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded flex items-center justify-center gap-2 group transition-all duration-300"
>
  <span>Send Message</span>
  <FaTelegramPlane className="text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ParticlesBackground;
