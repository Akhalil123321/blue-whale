import React from 'react'
import './ServicesSection.css'

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Company Groups</h2>
      <div className="services-list">
        <ServiceBox 
          title="Real Estate Group" 
          description="We plan, design, and execute high-quality residential and commercial projects that stand the test of time—combining architectural innovation with market-driven strategies." 
        />
        <ServiceBox 
          title="Project Management Group" 
          description="From concept to completion, we oversee every detail to ensure timely delivery, cost-efficiency, and exceptional results that align with client expectations." 
        />
        <ServiceBox 
          title="Design & Build Group" 
          description="An integrated approach where we handle both the creative design and construction, delivering seamless results and faster project turnaround." 
        />
        <ServiceBox 
          title="General Contracting Group" 
          description="We manage full-scale construction operations with precision, ensuring compliance, quality control, and safety across all phases of development." 
        />
        <ServiceBox 
          title="Renovation & Fit-Out Group" 
          description="Whether it's upgrading interiors or customizing spaces, we provide tailored renovation and fit-out solutions that enhance functionality and aesthetic value." 
        />
        <ServiceBox 
          title="Sustainability Consulting Group" 
          description="Helping clients build greener, smarter developments through eco-friendly practices, energy-efficient solutions, and sustainable planning." 
        />
      </div>
    </section>
  );
};

const ServiceBox = ({ title, description }) => (
  <div className="service-box">
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

export default ServicesSection;
