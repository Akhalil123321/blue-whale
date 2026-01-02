import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "../../Data/Data";
import "./OurProjectsList.css";

const OurProjectsList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="opl-section">
      {/* <h2 className="opl-title">Our Projects</h2> */}
      <div className="opl-container">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="opl-card"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <div className="opl-img-wrapper">
              <img
                src={project.image}
                alt={project.ProjectName}
                className="opl-img"
              />
            </div>
            <div className="opl-content">
              <h3 className="opl-name">{project.ProjectName}</h3>
              <p className="opl-slogan">{project.ProjectSlogan}</p>
              <p className="opl-details">{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjectsList;
