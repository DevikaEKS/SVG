import React, { useEffect, useState, useRef } from "react";
import "./Mission.css";

const Mission = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const missionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (missionRef.current) {
        const rect = missionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Progress: 0 when top is at bottom of viewport, 1 when top is at top of viewport
        let progress = 1 - rect.top / windowHeight;
        progress = Math.min(Math.max(progress, 0), 1); // Clamp between 0 and 1
        setScrollPercent(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-vh-100 text-white d-flex align-items-center missionpage container-fluid"
      style={{
        backgroundImage: `url("https://www.hdwallpapers.in/download/moon_planet_space_black_wallpaper_dark_sky_background_hd_space-1920x1080.jpg")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden"
      }}
    >
      <div className="row w-100 p-5">
        {/* Mission */}
        <div className="col-sm-12 col-md-6">
          <h2
            ref={missionRef}
            className="missiontitle"
            style={{
              background: `linear-gradient(to right, #fa6e43 ${scrollPercent * 100}%, white ${scrollPercent * 100}%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "background 0.2s ease-out"
            }}
          >
            MISSION
          </h2>
          
          <p className="lead">
          Creation of better tomorrow for 
generations to come through 
empowerment
          </p>
          {/* <img src="https://d1ssu070pg2v9i.cloudfront.net/pex/leys_estate/2018/12/13115133/18.png"/> */}
        </div>
 <div className="col-sm-12 col-md-6">
         
          
          
        </div>
        <div className="col-sm-12 col-md-6">    </div>
        {/* Vision */}
        <div className="col-sm-12 col-md-6">
          <h2 className="missiontitle"  style={{
              background: `linear-gradient(to left, #fa6e43 ${scrollPercent * 100}%, white ${scrollPercent * 100}%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "background 0.2s ease-out"
            }}>VISION</h2>
          <p className="lead">
           Delivering products and services of 
customers dream through 
continuous validation of 
technologies and systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
