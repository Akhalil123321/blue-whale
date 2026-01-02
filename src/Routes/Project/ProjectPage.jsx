import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../../Data/Data";
import "./ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <h2 className="pd-notfound">Project Not Found</h2>;

  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <main className="pd-main">
      <div className="pd-main-image-wrapper">
        <img src={project.image} alt={project.ProjectName} className="pd-main-image" />
        <div className="pd-overlay">
          <motion.div className="pd-overlay-content" initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="pd-title">{project.ProjectName}</h1>
            <p className="pd-slogan">{project.ProjectSlogan}</p>
            <button className="pd-back-btn" onClick={() => navigate("/OurProjects")}>
              Go to Our Projects
            </button>
          </motion.div>
        </div>
      </div>

      <div className="pd-content-wrapper">
        <motion.section className="pd-images" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          {[project.image1, project.image2, project.image3].map((img, idx) =>
            img ? (
              <motion.img
                key={idx}
                src={img}
                alt={`Project ${idx + 1}`}
                className="pd-image"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.4 }}
              />
            ) : null
          )}
        </motion.section>

        <motion.section className="pd-details" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="pd-details-card" whileHover={{ scale: 1.02 }}>
            <h2>Project Details</h2>
            <p>{project.details}</p>
          </div>
          <div className="pd-info-card" whileHover={{ scale: 1.02 }}>
            <h2>Information</h2>
            <p>Project Price : {project.ProjectPrice} AED</p>
            <p>Location : {project.Location}</p>
            <p>Building Type : {project.BuildingType}</p>
            <p>No. of floors : {project.FloorsNo}</p>
            <p>Project Status : {project.Status}</p>
          </div>
        </motion.section>

        <motion.section className="pd-extras" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h3>Features</h3>
          <div className="pd-extras-grid">
            {[project.P1, project.P2, project.P3, project.P4, project.P5, project.P6, project.P7].map(
              (extra, idx) => extra ? <span key={idx} className="pd-extra">{extra}</span> : null
            )}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
