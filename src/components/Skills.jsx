import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiPostman } from "react-icons/si";
import "../App.css";

const Skills = () => {
  const skillsData = [
    { name: "Java", icon: <FaJava />, color: "#f89820" },
    { name: "SpringBoot", icon: <SiSpringboot />, color: "#6db33f" },
    { name: "React", icon: <FaReact />, color: "#61dafb" },
    { name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572b6" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06b6d4" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952b3" },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
    { name: "MySQL", icon: <FaDatabase />, color: "#00758f" },
    { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="section-title text-start mb-3">Skills</h2>

        <Row className="g-3 d-flex flex-wrap justify-content-start">
          {skillsData.map((skill, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              className="col-lg-2-4 d-flex"
            >
              <Card className="skill-square-card text-center w-100">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center p-2">
                  <div
                    className="icon-wrapper mb-1"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>

                  <Card.Title
                    className="skill-title my-1"
                    style={{ color: "#ffffff" }}
                  >
                    {skill.name}
                  </Card.Title>

                  <div
                    className="colorful-divider"
                    style={{ "--skill-color": skill.color }}
                  ></div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
