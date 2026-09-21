import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub, FaVideo, FaImages } from "react-icons/fa";
import "../App.css";

const Projects = () => {
  const [selectedScreenshots, setSelectedScreenshots] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "AI-Powered Job Portal with ATS Resume Matcher",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      description:
        "An intelligent job application & recruitment portal built using Spring Boot and React to streamline hiring.",
      techStack: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "Tailwind CSS",
        "Google Gemini API",
        "JUnit 5",
        "REST APIs",
      ],
      githubLink: "https://github.com/Bhumika1104/job-portal-system",
      demoVideo:
        "https://drive.google.com/file/d/1Qakh51Zp1iNzZnzVzG5hDEvBWpbFKtcy/view?usp=drive_link",
      screenshots: [
        "https://github.com/user-attachments/assets/ca919ead-13a3-4af4-b201-ae8a8773a888",
        "https://github.com/user-attachments/assets/002a78b9-f873-41f6-a9e8-41d0e43507b8",
        "https://github.com/user-attachments/assets/1f22adc8-5f09-410f-9233-f335288ebf28",
        "https://github.com/user-attachments/assets/b9cb947b-fb22-4f36-a143-80b8699187be",
        "https://github.com/user-attachments/assets/8c156ab9-0c84-4d37-a395-015df3385fb2",
        "https://github.com/user-attachments/assets/276d08a7-cb76-40ec-81aa-25243b058a4a",
        "https://github.com/user-attachments/assets/f98d0a72-00ed-4dbb-ac51-a4f95fc5c533",
        "https://github.com/user-attachments/assets/0451e9a7-aa77-4031-88d8-0501fdc481bc",
      ],
      color: "#38bdf8",
    },
    {
      id: 2,
      title: "SplitSmart — Smart Bill Splitting",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
      description:
        "A full-stack group expense management app to split bills and track shared balances easily.",
      techStack: [
        "Java",
        "Spring Boot",
        "React.js",
        "Tailwind CSS",
        "MySQL",
        "Spring Security",
        "JWT",
        "REST APIs",
      ],
      githubLink: "https://github.com/Bhumika1104/SplitSmart-Bill-Splitter",
      demoVideo: "https://github.com/Bhumika1104/SplitSmart-Bill-Splitter",
      screenshots: [
        "https://github.com/user-attachments/assets/e4cab6e6-705f-4186-9707-5d7faf3ef91f",
        "https://github.com/user-attachments/assets/5738965a-1c04-4616-84da-5505c97e6ca7",
        "https://github.com/user-attachments/assets/d594014e-5f49-4677-801e-2e596dffdd59",
        "https://github.com/user-attachments/assets/4a8ed5ea-42df-4fea-9091-f97da6326755",
      ],
      color: "#f7df1e",
    },
    {
      id: 3,
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
      demoVideo:
        "https://drive.google.com/file/d/1INIJDxTVewjFc_bL9nWrk6tyfTgSM2eo/view?usp=sharing",
      screenshots: [
        "https://raw.githubusercontent.com/Bhumika1104/codeverse-learning-portal/main/screenshots/1.jpg",
        "https://raw.githubusercontent.com/Bhumika1104/codeverse-learning-portal/main/screenshots/3.jpg",
        "https://raw.githubusercontent.com/Bhumika1104/codeverse-learning-portal/main/screenshots/4.jpg",
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
      demoVideo:
        "https://drive.google.com/file/d/1rOegsrjQcowKHSbzNi46EdG4tIFM9n1E/view?usp=sharing",
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
      {/* Added fluid container or max-width container if needed, keeping original Container */}
      <Container fluid className="px-4">
        <h2 className="section-title text-start mb-3">Projects</h2>

        <Row className="g-4 d-flex flex-wrap justify-content-center">
          {projectsData.map((project) => (
            <Col
              key={project.id}
              xs={12}
              sm={6}
              md={6}
              lg={3}
              className="d-flex"
            >
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
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Screenshot ${index + 1}`}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x250?text=Image+Not+Found";
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
