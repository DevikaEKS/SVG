import React, { useRef, useEffect, useState } from "react";
import "./ScrollSlideCard.css";

export default function ScrollSlideCard({ image, title }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); 
        }
      },
      { threshold: 0.5}
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`slide-card ${isVisible ? "show" : ""}`}
    >
      <img src={image} alt={title} className="slide-image" />
      <p className="slide-title">{title}</p>
    </div>
  );
}
