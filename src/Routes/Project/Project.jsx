/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../../Data/Data";
import "./Project.css";

export default function Project() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <main className="projects-main-page">
      <div className="main-content">
        <img src={project.image} className="ourroom-img" />
        <div className="room-detailes single-room">
          <h1 className="our-room-title single-room-width">
            {project.ProjectName}
          </h1>
          <hr className="line" />
          <p className="our-room-ofers single-offer">{project.ProjectSlogan}</p>
          <button
            className="our-rooms-btn"
            onClick={() => navigate("/")}
          >
            {project.back}
          </button>
        </div>
      </div>

      <div className="single-room-ditailes-container">
        <img src={project.image1} className="single-room-image" />
        <img src={project.image2} className="single-room-image" />
        <img src={project.image3} className="single-room-image" />
      </div>

      <div className="single-room-d-i-container">
        <div className="single-room-detail">
          <h3 className="single-room-detail-h">Details:</h3>
          <p className="single-room-detail-p">{project.ditailes}</p>
        </div>
        <div className="single-room-info">
          <h3 className="single-room-info-h">Information:</h3>
          <p className="single-room-info-p">Price : {project.price} $</p>
          <p className="single-room-info-p">Size : {project.size} SQFT</p>
          <p className="single-room-info-p">Room Numbers : {project.Guests}</p>
          <p className="single-room-info-p">
            {project.Pets ? "1 Parking" : "2 Parking"}
          </p>
        </div>
      </div>

      <div className="extras">
        <h4 className="extras-h">Extras:</h4>
        <div className="extras-p-container">
          <p className="extras-p">- {project.P1}</p>
          <p className="extras-p">- {project.P2}</p>
          <p className="extras-p">- {project.P3}</p>
          <p className="extras-p">- {project.P4}</p>
          <p className="extras-p">- {project.P5}</p>
          <p className="extras-p">- {project.P6}</p>
          <p className="extras-p">- {project.P7}</p>
        </div>
      </div>
    </main>
  );
}
