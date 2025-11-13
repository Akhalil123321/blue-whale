import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Building2, Home, ShieldCheck } from "lucide-react";
import "./Services.css";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const services = [
    {
      icon: <Building2 size={40} color="#DF9925" />,
      title: "Property Development",
      desc: "Crafting premium residential and commercial spaces that define modern living.",
    },
    {
      icon: <Home size={40} color="#DF9925" />,
      title: "Real Estate Management",
      desc: "Offering seamless property management with precision, trust, and innovation.",
    },
    {
      icon: <Briefcase size={40} color="#DF9925" />,
      title: "Investment Consulting",
      desc: "Guiding clients to smart and secure real estate investment opportunities.",
    },
    {
      icon: <ShieldCheck size={40} color="#DF9925" />,
      title: "Design & Build",
      desc: "An integrated approach where we handle both the creative design and construction.",
    },
  ];

  return (
    <section ref={ref} className="services-section">
      <motion.div
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 className="services-title" variants={itemVariants}>
          Our Services
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-box"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(223, 153, 37, 0.2)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
