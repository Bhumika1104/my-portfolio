import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub, FaVideo, FaImages } from "react-icons/fa";
import "../App.css";

const Projects = () => {
  const [selectedScreenshots, setSelectedScreenshots] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Job Portal System",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      description:
        "An intelligent job application & recruitment portal built using Spring Boot and React to streamline hiring.",
      techStack: ["Java", "Spring Boot", "React", "MySQL", "Tailwind CSS"],
      githubLink: "https://github.com/Bhumika1104/job-portal-system",
      demoVideo:
        "https://drive.google.com/file/d/1Qakh51Zp1iNzZnzVzG5hDEvBWpbFKtcy/view?usp=drive_link",
      screenshots: [
        "https://github.com/Bhumika1104/job-portal-system/raw/main/screenshots/s1.jpg",
        "https://github.com/Bhumika1104/job-portal-system/raw/main/screenshots/s2.jpg",
        "https://github.com/Bhumika1104/job-portal-system/raw/main/screenshots/s4.jpg",
        "https://github.com/Bhumika1104/job-portal-system/raw/main/screenshots/s8.jpg",
      ],
      color: "#38bdf8",
    },
    {
      id: 2,
      title: "Codeverse Learning Portal",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      description:
        "An interactive online learning system providing structured coding courses, resources, and progress tracking.",
      techStack: [
        "React",
        "Java",
        "SpringBoot",
        "Tailwind CSS",
        "REST API",
        "MySQL",
      ],
      githubLink: "https://github.com/Bhumika1104/codeverse-learning-portal",
      demoVideo: "https://youtube.com/demo2",
      screenshots: [
        "https://github.com/Bhumika1104/codeverse-learning-portal/raw/main/screenshots/1.jpg",
        "https://github.com/Bhumika1104/codeverse-learning-portal/raw/main/screenshots/3.jpg",
        "https://github.com/Bhumika1104/codeverse-learning-portal/raw/main/screenshots/4.jpg",
        "https://github.com/Bhumika1104/codeverse-learning-portal/raw/main/screenshots/5.jpg",
        "https://github.com/Bhumika1104/codeverse-learning-portal/raw/main/screenshots/6.jpg",
        "https://github.com/Bhumika1104/codeverse-learning-portal/raw/main/screenshots/8.jpg",
        "https://github.com/Bhumika1104/codeverse-learning-portal/raw/main/screenshots/9.jpg",
        "https://github.com/Bhumika1104/codeverse-learning-portal/raw/main/screenshots/10.jpg",
        "https://github.com/Bhumika1104/codeverse-learning-portal/raw/main/screenshots/14.jpg",
      ],
      color: "#6db33f",
    },
    {
      id: 3,
      title: "Amazon Clone (Frontend)",
      image:
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=600&q=80",
      description:
        "A responsive pixel-perfect e-commerce frontend replica featuring product listings and dynamic shopping cart UI.",
      techStack: ["React", "React Bootstrap", "CSS3", "HTML5"],
      githubLink: "https://github.com/Bhumika1104/amazon-clone-react",
      demoVideo: null,
      screenshots: [
        "https://github.com/Bhumika1104/amazon-clone-react/raw/main/screenshots/ss0.png",
        "https://github.com/Bhumika1104/amazon-clone-react/raw/main/screenshots/ss1.png",
        "https://github.com/Bhumika1104/amazon-clone-react/raw/main/screenshots/ss2.png",
      ],
      color: "#f7df1e",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title text-start mb-3">Projects</h2>

        <Row className="g-4 d-flex flex-wrap justify-content-center">
          {projectsData.map((project) => (
            <Col key={project.id} xs={12} sm={6} lg={3} className="d-flex">
              <Card className="project-card text-start w-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="project-img-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img"
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="project-title mb-2">{project.title}</h3>

                    <p className="project-description mb-3">
                      {project.description}
                    </p>

                    <div className="tech-stack-container mt-3 mb-2">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3 pt-0">
                  <div
                    className="colorful-divider"
                    style={{ "--skill-color": project.color }}
                  ></div>

                  <div className="project-links d-flex flex-wrap gap-2 mt-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn github-btn"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}

                    {project.demoVideo && (
                      <a
                        href={project.demoVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn demo-btn"
                      >
                        <FaVideo /> Demo
                      </a>
                    )}

                    {/* MULTIPLE SCREENSHOTS BUTTON */}
                    {project.screenshots && project.screenshots.length > 0 && (
                      <button
                        onClick={() =>
                          setSelectedScreenshots(project.screenshots)
                        }
                        className="project-btn screenshot-btn"
                      >
                        <FaImages /> Shots ({project.screenshots.length})
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* SCREENSHOTS POPUP MODAL */}
      {selectedScreenshots && (
        <div
          className="screenshot-modal-overlay"
          onClick={() => setSelectedScreenshots(null)}
        >
          <div
            className="screenshot-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedScreenshots(null)}
            >
              ✕
            </button>
            <h4 className="mb-4 text-info">Project Screenshots</h4>
            <div className="screenshot-grid">
              {selectedScreenshots.map((imgUrl, index) => (
                <img key={index} src={imgUrl} alt={`Screenshot ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
