import React from 'react';
import { Link } from "react-router-dom";
import bgVid from "../../Images/BackgroundVid.mp4";
import bgImg from "../../Images/BackgroundVidSnap.png"
import './Hero.css';

const Hero = () => {
   return (
    <section className="hero-section">
      <video
        className="hero-video"
        src={bgVid}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={bgImg}
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Blue Whale Real Estate</h1>
        <p className="hero-subtitle">
          We don’t just promise results — we build them, brick by brick, on a foundation of trust that never cracks.
        </p>

        <Link to="/OurProjects" className="hero-button">
          Explore Our Projects
        </Link>

      </div>
    </section>
  );
};

export default Hero;
