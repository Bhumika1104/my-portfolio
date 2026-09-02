import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Modal,
  Button,
} from "react-bootstrap";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaAward,
  FaExpand,
  FaLock,
} from "react-icons/fa";
import "../App.css";

const Experience = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const preventSave = (e) => {
    e.preventDefault();
  };

  const experiences = [
    {
      id: 1,
      role: "Java Full Stack Developer Intern",
      company: "Yess Infotech",
      location: "Pune, Maharashtra",
      duration: "6 Months",
      type: "Internship",
      certificateImg: "/ss.jpg.png",
      description: [
        "Developed end-to-end full-stack web application features using Java, Spring Boot, React.js, and MySQL.",
        "Designed and integrated RESTful APIs with Spring Security and JWT Authentication for Role-Based Access Control (RBAC).",
        "Tested and validated REST endpoints using Postman to ensure seamless request handling, accurate responses, and reliable data flow.",
        "Designed relational database tables in MySQL and implemented optimized SQL queries for CRUD operations and efficient data retrieval.",
        "Built reusable, responsive, and modern UI components using React.js and Tailwind CSS.",
      ],
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "React.js",
        "REST API",
        "MySQL",
        "JavaScript",
        "Bootstrap",
        "Git",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="section-title text-start mb-2">Experience</h2>
        <p className="text-start text-white-50 mb-3">
          My professional journey, hands-on industry experience, and technical
          contributions.
        </p>

        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <div className="timeline-wrapper">
              {experiences.map((exp) => (
                <Card key={exp.id} className="experience-card p-4 mb-4">
                  <Row className="align-items-start g-3">
                    {/* HEADER INFO */}
                    <Col xs={12}>
                      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <div className="exp-icon-wrapper">
                            <FaBriefcase />
                          </div>
                          <div>
                            <h4 className="exp-role text-white mb-0">
                              {exp.role}
                            </h4>
                            <span className="exp-company">{exp.company}</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <Badge bg="primary" className="exp-badge">
                            {exp.type}
                          </Badge>

                          {/* CERTIFICATE SMALL BUTTON */}
                          {exp.certificateImg && (
                            <button
                              className="cert-btn-small"
                              onClick={handleShow}
                              title="View Certificate"
                            >
                              <FaAward className="me-1 text-warning" />{" "}
                              Certificate{" "}
                              <FaExpand
                                className="ms-1"
                                style={{ fontSize: "10px" }}
                              />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* DURATION & LOCATION */}
                      <div className="exp-meta d-flex flex-wrap gap-3 my-3">
                        <span className="d-flex align-items-center gap-1 text-white-50">
                          <FaCalendarAlt className="text-info" /> {exp.duration}
                        </span>
                        <span className="d-flex align-items-center gap-1 text-white-50">
                          <FaMapMarkerAlt className="text-danger" />{" "}
                          {exp.location}
                        </span>
                      </div>
                    </Col>

                    {/* RESPONSIBILITIES LIST */}
                    <Col xs={12}>
                      <ul className="exp-description-list ps-0 mb-4">
                        {exp.description.map((point, index) => (
                          <li
                            key={index}
                            className="d-flex align-items-start gap-2 mb-2 text-white-50"
                          >
                            <FaCheckCircle className="exp-check-icon mt-1" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </Col>

                    {/* TECH STACK BADGES */}
                    <Col xs={12}>
                      <div className="d-flex flex-wrap gap-2 pt-2 border-top border-secondary border-opacity-25">
                        {exp.skills.map((skill, index) => (
                          <span key={index} className="tech-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </Col>
                  </Row>

                  {/* SECURE CERTIFICATE MODAL */}
                  <Modal
                    show={showModal}
                    onHide={handleClose}
                    size="lg"
                    centered
                  >
                    <Modal.Header
                      closeButton
                      className="bg-dark text-white border-secondary"
                    >
                      <Modal.Title className="d-flex align-items-center gap-2 fs-5">
                        <FaAward className="text-warning" /> Certificate Preview
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                      className="bg-dark p-3 text-center unselectable-container"
                      onContextMenu={preventSave}
                    >
                      <div className="protected-img-wrapper">
                        <img
                          src={exp.certificateImg}
                          alt="Internship Certificate"
                          className="protected-cert-img"
                          onContextMenu={preventSave}
                          onDragStart={preventSave}
                        />
                        {/* वॉटरमार्क Overlay */}
                        <div className="watermark-overlay">PREVIEW ONLY</div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer className="bg-dark border-secondary justify-content-between">
                      <small className="text-white-50 d-flex align-items-center gap-1">
                        <FaLock className="text-warning" /> Protected View
                        (Download disabled)
                      </small>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={handleClose}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
