import React from "react";
import { Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import profilePic from "../assets/bhumika.jpg"; // replace with your image

function Hero() {
  return (
    <section className="hero-section text-center d-flex flex-column align-items-center justify-content-center">
      <img src={profilePic} alt="Profile" className="profile-img mb-3" />
      <h5 className="text-uppercase text-muted">Welcome to my world</h5>
      <h1 className="fw-bold">Hi, I’m Manoj Adhikari a Designer</h1>
      <p className="lead">
        Experienced frontend developer with a passion for creating visually
        stunning and user-friendly websites.
      </p>
      <div className="mt-3">
        <Button variant="danger" className="me-2">
          Hire Me
        </Button>
        <Button variant="outline-dark">Download CV</Button>
      </div>
      <div className="social-icons mt-4">
        <FaFacebook className="mx-2" />
        <FaTwitter className="mx-2" />
        <FaLinkedin className="mx-2" />
        <FaGithub className="mx-2" />
      </div>
      <div className="scroll-down mt-5">
        <Button variant="link" className="text-dark">
          Scroll Down
        </Button>
      </div>
    </section>
  );
}

export default Hero;
