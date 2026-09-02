import React from "react";
import "../App.css";
import bhumika from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <header>
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">Bhumika Patil</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="hero">
        {/* LEFT BOX */}
        <div className="left-box">
          <h3>Hello,</h3>
          <h2>I am a Java Full Stack Developer</h2>

          <div id="about" className="lines">
            <p>
              A passionate and self-driven developer skilled in Java, Spring
              Boot, React.js, and MySQL. I love turning ideas into real-world
              applications and continuously improving my coding skills. Focused
              on building clean, responsive, and efficient web applications
              while learning modern technologies and best practices in software
              development.
            </p>
          </div>

          <div className="hero-hashtags">
            <span>#Java</span>
            <span>#SpringBoot</span>
            <span>#ReactJS</span>
            <span>#JavaFullStack</span>
            <span>#RESTAPI</span>
            <span>#MySQL</span>
            <span>#SoftwareDeveloper</span>
            <span>#Learning</span>
            <span>#CodingJourney</span>
            <span>#Fresher</span>
          </div>

          {/* BUTTONS */}
          <div className="btns">
            <a href="#contact">
              <button className="btn">Hire Me</button>
            </a>

            <a href="/resume.pdf" download="Bhumika_Patil_Resume.pdf">
              <button className="btn">Download Resume</button>
            </a>
          </div>
        </div>

        {/* RIGHT CIRCLE */}
        <div className="right-box">
          <div className="circle">
            <img src={bhumika} alt="Profile" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
