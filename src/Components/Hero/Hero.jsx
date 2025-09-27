import React from 'react';
import { Link } from "react-router-dom";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            Where the trust meets<br /> the result.
          </h1>
          <p className="hero-subtitle">
            We don’t just promise results — we build them, brick by brick, on a foundation of trust that never cracks.
          </p>
            <Link to="/OurProjects">
              <button className="hero-button">
              View Our Projects
              </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
