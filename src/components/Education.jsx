import React from "react";
import { Container } from "react-bootstrap";
import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";
import "../App.css";

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "B.Tech in Computer Engineering",
      institution: "J.T.Mahajan College Of Engineering Faizpur",
      duration: "2022 - 2026",
      score: "CGPA: 7.54 / 10",
      icon: <FaGraduationCap />,
      color: "#38bdf8",
    },
    {
      id: 2,
      title: "Higher Secondary Certificate (HSC)",
      institution: "Dhanaji Nana Mahavidyalaya Faizpur",
      duration: "2021 - 2022",
      score: "Percentage: 82.17%",
      icon: <FaSchool />,
      color: "#6db33f",
    },
    {
      id: 3,
      title: "Secondary School Certificate (SSC)",
      institution: "G.K.Vidyalaya Amode",
      duration: "2019 - 2020",
      score: "Percentage: 90.20%",
      icon: <FaBook />,
      color: "#f89820",
    },
  ];

  return (
    <section id="education" className="education-section">
      <Container>
        <h2 className="section-title text-start mb-3">Education</h2>

        {/* Roadmap Vertical Timeline Container */}
        <div className="roadmap-container">
          {/* Middle Vertical Glowing Line */}
          <div className="vertical-roadmap-line"></div>

          {educationData.map((edu) => (
            <div className="roadmap-item mb-3" key={edu.id}>
              {/* Glowing Icon Marker on Vertical Line */}
              <div
                className="roadmap-marker"
                style={{ "--marker-color": edu.color }}
              >
                {edu.icon}
              </div>

              {/* Content Card */}
              <div className="roadmap-card">
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
                  <h3 className="edu-title m-0">{edu.title}</h3>
                  <span className="edu-year">{edu.duration}</span>
                </div>

                <h5 className="edu-college mb-3">{edu.institution}</h5>

                <div
                  className="edu-badge"
                  style={{ "--badge-color": edu.color }}
                >
                  {edu.score}
                </div>

                {/* Divider at bottom */}
                <div
                  className="colorful-divider mt-3"
                  style={{ "--skill-color": edu.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
