import React from 'react';
import './WhyChooseUs.css';
import { FaTools, FaClock, FaBullseye, FaDraftingCompass, FaLeaf, FaHardHat } from 'react-icons/fa';

const features = [
  {
    icon: <FaTools />,
    title: 'Turnkey Solutions',
    description: 'From concept to completion — we handle everything with precision and care.',
  },
  {
    icon: <FaClock />,
    title: 'On-Time Delivery',
    description: 'Punctuality is at the core of every project we take on.',
  },
  {
    icon: <FaBullseye />,
    title: 'Client-Centered Approach',
    description: 'Every detail is tailored to meet your goals and expectations.',
  },
  {
    icon: <FaDraftingCompass />,
    title: 'Design Precision',
    description: 'Excellence in aesthetics, function, and form.',
  },
  {
    icon: <FaLeaf />,
    title: 'Sustainable Methods',
    description: 'We follow eco-friendly, energy-efficient practices.',
  },
  {
    icon: <FaHardHat />,
    title: 'Decades of Experience',
    description: 'A solid legacy of delivering excellence in construction.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Blue Whale?</h2>
        <p className="section-subtitle">
          We don't just build structures — we build trust, value, and experiences that last a lifetime.
        </p>

        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
          <button className="cta-button">See Our Latest Projects</button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
