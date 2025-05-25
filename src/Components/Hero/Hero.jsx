import React from 'react'

import './Hero.css'

const Hero = () => {
    return (
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              We Don’t Just Build Buildings,<br /> We Build Legacies.
            </h1>
            <p className="hero-subtitle">
              From concept to completion, we create architectural landmarks
              that define cities and elevate lifestyles.
            </p>
            <button className='hero-button'>
              View Our Projects
            </button>
          </div>
        </div>
      </section>
      );
}
export default Hero