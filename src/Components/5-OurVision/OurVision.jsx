import React from "react";
import { motion } from "framer-motion";
import "./OurVision.css";

const OurVision = () => {
  const boxVariants = {
    hidden: { opacity: 0, y: 80, rotateY: 45, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        delay: i * 0.25 + 0.4,
        duration: 0.9,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  return (
    <section className="vision-section">
      <div className="vision-overlay"></div>

      <motion.div
        className="vision-content"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <motion.h2
          className="vision-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Vision
        </motion.h2>

        <motion.p
          className="vision-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our vision goes beyond constructing buildings — it’s about creating a
          vibrant ecosystem where every development tells a story. We blend
          architectural artistry with smart planning to enrich lives and elevate
          expectations.
        </motion.p>

        <motion.p
          className="vision-quote"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          “Because we don’t just build spaces — we build legacies.”
        </motion.p>

        <motion.button
          className="btn vision-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Discover More
        </motion.button>

        <div className="vision-values">
          {[
            {
              icon: "fas fa-lightbulb",
              title: "Innovation",
              text: "We embrace creativity to redefine modern living.",
            },
            {
              icon: "fas fa-handshake",
              title: "Integrity",
              text: "Our success is built on trust and transparency.",
            },
            {
              icon: "fas fa-building",
              title: "Excellence",
              text: "We craft every project to stand the test of time.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="vision-box"
              custom={i}
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="vision-box-inner">
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurVision;
