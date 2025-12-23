import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-logo">Innovatetech Learning Academy</h2>
          <p className="footer-text">
            Computer Training & Skill Development Center  
            <br /> ISO & MSME Registered
          </p>
          <p className="footer-text">
            Empowering students with future-ready digital skills.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#why-us">Why Choose Us</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>

          <p className="footer-text">
            Phone:{" "}
            <a href="tel:+919836196136" className="footer-link">
              +91-9836196136
            </a>
          </p>

          <p className="footer-text">
            Email:{" "}
            <a
              href="mailto:innovatetechsubhojit24@gmail.com"
              className="footer-link"
            >
              innovatetechsubhojit24@gmail.com
            </a>
          </p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/share/1DUz4S4kSL/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/innovatetechlearningacademy?igsh=OWptcTJ1ZGRpamZh" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/919836196136" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>

          {/* Google Map Embed */}
          <div className="footer-map">
            <iframe
              title="Innovatetech Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.760567733868!2d88.38199457475869!3d22.625414531033602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d30b08ee983%3A0xb28103b5a0159978!2sInnovateTech%20Learning%20Academy!5e0!3m2!1sen!2sin!4v1766221681833!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Innovatetech Learning Academy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
