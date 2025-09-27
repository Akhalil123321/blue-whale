import React from 'react'
import { useNavigate } from "react-router-dom";
import projects from "../../Data/Data";
import "./MainProjects.css";
const MainProjects = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.filter(
    (p) => p.id === 1 || p.id === 2 || p.id === 3
  );

  return (
    <section className="mp-section">
      <h2>Featured Projects</h2>
      <div className="mp-container">
        {featuredProjects.map((p) => (
          <div
            key={p.id}
            className="mp-card"
            onClick={() => navigate(`/project/${p.id}`)}
          >
            <img src={p.image} alt={p.ProjectName} className="mp-img" />
            <h3>{p.ProjectName}</h3>
            <p>{p.ProjectSlogan}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default MainProjects
