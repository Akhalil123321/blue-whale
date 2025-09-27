import React, { useEffect, useRef, useState } from 'react';
import './OurVision.css';

const OurVision = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className={`our-vision ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
      aria-labelledby="our-vision-title"
    >
      <div className="overlay">
        <div className="container">
          <h2 id="our-vision-title" className="fade-up">Our Vision</h2>
          <p className="intro fade-up">
            We are dedicated to crafting inspiring spaces that shape sustainable communities,
            redefining modern living with innovation, creativity, and a relentless pursuit of excellence.
          </p>
          <p className="details fade-up">
            Our vision goes beyond constructing buildings—it’s about creating a vibrant ecosystem
            where every development tells a story. From urban residences to commercial landmarks,
            we blend architectural artistry with smart planning to enrich lives and elevate expectations.
            With a forward-thinking mindset and a passion for quality, we aim to build environments that stand the test of time.
          </p>
          <button className="cta-button fade-up" type="button">Discover Our Projects</button>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
