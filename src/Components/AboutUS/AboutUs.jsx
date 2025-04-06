import React from 'react';
import AboutUsImg from "../../Images/Blank img.png";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-text">
        commitment to quality. With a team of highly skilled professionals, we specialize in delivering exceptional projects that not only meet expectations but exceed them. Our work reflects a deep passion for excellence, meticulous attention to detail, and a performance-driven approach that sets us apart in the industry. At Blue Whale, we don’t just build projects—we build lasting value, strong partnerships, and a reputation for reliability and innovation.
        </p>
      </div>
      <div className="about-us-image">
        <img src={AboutUsImg} alt="About Blue Whale" />
      </div>
    </section>
  );
};

export default AboutUs
