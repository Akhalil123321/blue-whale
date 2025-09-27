import React from 'react'
import { useNavigate } from "react-router-dom";
import projectsData from "../../Data/Data";
import "./OurProjects.css";

function OurProjects() {
const navigate = useNavigate();

  return (
    <div className="op-container">
      {projectsData.map((p) => (
        <div
          key={p.id}
          className="op-projects"
          onClick={() => navigate(`/project/${p.id}`)}
          style={{ cursor: "pointer" }}
        >
          <h3>{p.ProjectName}</h3>
          <p>{p.ProjectSlogan}</p>
        </div>
      ))}
    </div>
  );
}

export default OurProjects;