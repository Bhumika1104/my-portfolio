import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import "../App.css";

const Contact = () => {
  const MY_WHATSAPP_NUMBER = "918806061612";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp Message Text Formatter
    const textMessage = `Hello Bhumika,%0A%0AI visited your portfolio and wanted to connect:%0A%0A👤 *Name:* ${encodeURIComponent(formData.name)}%0A📧 *Email:* ${encodeURIComponent(formData.email)}%0A💬 *Message:* ${encodeURIComponent(formData.message)}`;

    // Open WhatsApp Link
    const whatsappUrl = `https://wa.me/${MY_WHATSAPP_NUMBER}?text=${textMessage}`;
    window.open(whatsappUrl, "_blank");

    setFormData({ name: "", email: "", message: "" });
  };

  const contactList = [
    {
      id: 1,
      title: "Email",
      value: "bhumikapatil0411@gmail.com",
      link: "mailto:bhumikapatil0411@gmail.com",
      icon: <FaEnvelope />,
      color: "#38bdf8",
    },
    {
      id: 2,
      title: "Phone",
      value: "+91 8806061612",
      link: "tel:+918806061612",
      icon: <FaPhoneAlt />,
      color: "#4ade80",
    },
    {
      id: 3,
      title: "LinkedIn",
      value: "linkedin.com/in/bhumika-patil11",
      link: "https://www.linkedin.com/in/bhumika-patil11",
      icon: <FaLinkedin />,
      color: "#0a66c2",
    },
    {
      id: 4,
      title: "GitHub",
      value: "github.com/Bhumika1104",
      link: "https://github.com/Bhumika1104",
      icon: <FaGithub />,
      color: "#f43f5e",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title text-start mb-2">Contact</h2>
        <p className="text-start text-white-50 mb-3">
          Have a project in mind, job opportunity, or just want to chat? Send me
          a message!
        </p>

        <Row className="g-4">
          {/* LEFT SIDE: CONTACT DETAILS */}
          <Col
            xs={12}
            lg={5}
            className="d-flex flex-column justify-content-between"
          >
            <div className="d-flex flex-column gap-3">
              {contactList.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-link"
                >
                  <div className="contact-small-card d-flex align-items-center p-3">
                    <div
                      className="contact-small-icon me-3"
                      style={{ color: item.color, borderColor: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h6 className="contact-item-title mb-0">{item.title}</h6>
                      <span className="contact-item-value">{item.value}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Col>

          {/* RIGHT SIDE: WHATSAPP FORM CARD */}
          <Col xs={12} lg={7}>
            <Card className="contact-form-card p-4">
              <h4 className="text-white mb-3">Send a Message</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="text-white-50">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="text-white-50">Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="text-white-50">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="custom-input"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="send-wp-btn w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                >
                  <FaPaperPlane /> Send on WhatsApp
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
