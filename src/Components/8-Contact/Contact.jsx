import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { useFiles } from "../../Components/Context/FilesContext";
import "./Contact.css";

const contactCards = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+971 55 269 2200",
    link: "tel:+971 55 269 2200",
  },
  {
    icon: <FaEnvelope />,
    title: "E-Mail",
    value: "info@bluewhaledevelopment.com",
    link: `mailto:info@bluewhaledevelopment.com?subject=Property Inquiry&body=Hi%20Bluewhale%20Team,%0D%0AI'm%20interested%20in%20getting%20more%20details%20about%20your%20projects.`,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Shining Towers, Khalidiyah, Floor 25, Office 2502",
    link: "https://maps.app.goo.gl/AwMBKKyiNEbFfs2A8",
  },
];

const socials = [
  { icon: <FaFacebookF />, link: "https://www.facebook.com/share/1CJkY9E7gU/" },
  { icon: <FaLinkedinIn />, link: "#" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/blue_whale_real_estate?igsh=MWl3NXNrZHQ2NXFsZA==" },
  {
    icon: <FaWhatsapp />,
    link: "https://api.whatsapp.com/send?phone=+971552692200",
  },
  { icon: <FaYoutube />, link: "#" },
];

const scrollAnim = {
  hidden: { opacity: 0, y: 80, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const { toggleInquiry } = useFiles();

  // CLICK ON CARD ANYWHERE
  const handleCardClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="contact-wrapper no-bg">
      {/* TITLE */}
      <motion.h2
        className="section-title"
        variants={scrollAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        Get In Touch
      </motion.h2>

      {/* CARDS */}
      <div className="contact-cards">
        {contactCards.map((card, i) => (
          <motion.div
            key={i}
            className="contact-card"
            onClick={() => handleCardClick(card.link)}
            variants={scrollAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="contact-icon">{card.icon}</div>
            <h3>{card.title}</h3>

            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {card.value}
            </a>
          </motion.div>
        ))}
      </div>

      {/* SOCIALS */}
      <motion.div
        className="contact-socials"
        variants={scrollAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.4 }}
      >
        {socials.map((s, i) => (
          <a key={i} href={s.link} target="_blank" rel="noopener noreferrer">
            {s.icon}
          </a>
        ))}
      </motion.div>

      {/* BUTTON */}
      <motion.button
        className="contact-btn"
        onClick={() => toggleInquiry(true)}
        variants={scrollAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.55 }}
      >
        CONTACT US
      </motion.button>
    </section>
  );
};

export default Contact;
