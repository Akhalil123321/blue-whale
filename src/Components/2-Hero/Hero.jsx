import React from 'react';
import { Link } from "react-router-dom";
import bgVid from "../../Images/BackgroundVid.mp4";  // سبق عندك الفيديو باسم هذا
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
        <p className="hero-subtitle">We don’t just promise results — we build them, brick by brick, on a foundation of trust that never cracks.</p>
        <button className="hero-button">Explore Projects</button>
      </div>
    </section>
  );
};

export default Hero;
