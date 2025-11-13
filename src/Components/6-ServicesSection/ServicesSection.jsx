import React from "react";
import { motion } from "framer-motion";
import "./ServicesSection.css";

const services = [
  {
    title: "Real Estate Group",
    description:
      "We design and build timeless residential and commercial developments that blend architectural artistry with enduring value.",
  },
  {
    title: "Project Management Group",
    description:
      "Delivering excellence from concept to completion, ensuring quality, efficiency, and innovation in every step.",
  },
  {
    title: "Design & Build Group",
    description:
      "An integrated approach uniting creative design and precision construction to achieve seamless results.",
  },
  {
    title: "General Contracting Group",
    description:
      "Executing large-scale construction with unmatched attention to detail, safety, and modern engineering standards.",
  },
  {
    title: "Renovation & Fit-Out Group",
    description:
      "Transforming interiors into elegant, functional spaces through expert renovation and finishing solutions.",
  },
  {
    title: "Sustainability Consulting Group",
    description:
      "Building smarter, greener environments through energy-efficient and eco-friendly strategies.",
  },
];

const directions = [
  { x: -80, y: -60 },
  { x: 80, y: -60 },
  { x: -80, y: 60 },
  { x: 80, y: 60 },
  { x: 0, y: -80 },
  { x: 0, y: 80 },
];

const ServicesSection = () => {
  return (
    <section className="services-section-modern">
      <motion.h2
        className="services-title-modern"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Our Company Groups
      </motion.h2>

      <div className="services-grid-modern">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card-modern"
            initial={{
              opacity: 0,
              x: directions[index % directions.length].x,
              y: directions[index % directions.length].y,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              type: "spring",
              stiffness: 80,
            }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              scale: 1.06,
              rotate: 1.5, /* استخدم rotate العادي بدل rotateX/Y */
              y: -8,
              transition: { duration: 0.3 },
            }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
