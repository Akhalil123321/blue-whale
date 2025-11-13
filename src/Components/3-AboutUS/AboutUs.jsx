import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./AboutUs.css";
import img from "../../Images/AboutUSPic.jpg";

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // لما يخرج السيكشن بيتعكس الأنيميشن
    }
  }, [controls, inView]);

  const sectionVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9, rotate: 3 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, delay: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="about-section"
      variants={sectionVariant}
      initial="hidden"
      animate={controls}
    >
      <div className="about-container">
        <motion.div
          className="about-content"
          variants={textVariant}
          initial="hidden"
          animate={controls}
        >
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            At <strong>Blue Whale Real Estate</strong>, we don’t just build
            structures — we create landmarks. Our mission is to deliver
            excellence through every brick, design, and detail.
            <br />
            With a legacy of trust and innovation, we shape skylines that stand
            the test of time and inspire generations to come.
          </p>

          <motion.button
            className="btn about-btn"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px #df992580",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="about-image"
          style={{ backgroundImage: `url(${img})` }}
          variants={imageVariant}
          initial="hidden"
          animate={controls}
        />
      </div>
    </motion.section>
  );
};

export default AboutUs;
