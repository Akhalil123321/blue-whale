import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../../Data/Data";
import "./OurProjects.css";

const OurProjects = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.filter(
    (p) => p.id === 1 || p.id === 2 || p.id === 3
  );

  // 🔥 أنيميشن العنوان – نفس ستايل كل العناوين اللي فوق
  const titleAnim = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  // 🔥 حركات الدخول — Smooth Fade Up
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 120, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="mp-section">

      <motion.h2
        className="section-title"       // ← نفس ستايل العناوين اللي فوق
        variants={titleAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
      >
        Our Projects
      </motion.h2>

      <motion.div
        className="mp-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: false }}
      >
        {featuredProjects.map((p) => (
          <motion.div
            key={p.id}
            className="mp-card"
            variants={cardAnim}
            whileHover={{
              scale: 1.05,
              y: -6,
              transition: { duration: 0.35 },
            }}
            onClick={() => navigate(`/project/${p.id}`)}
          >
            <div className="mp-img-wrapper">
              <motion.img
                src={p.image}
                alt={p.ProjectName}
                className="mp-img"
                whileHover={{
                  scale: 1.07,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
              />

              <div className="mp-overlay">
                <span className="mp-view">View Details →</span>
              </div>
            </div>

            <h3>{p.ProjectName}</h3>
            <p>{p.ProjectSlogan}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default OurProjects;
