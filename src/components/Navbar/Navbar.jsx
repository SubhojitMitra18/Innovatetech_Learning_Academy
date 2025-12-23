import { useState, useEffect, useCallback } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

/**
 * Primary navigation bar component
 * - Sticky & scroll-aware
 * - Fully responsive (desktop, tablet, mobile)
 * - Accessible & production-ready
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        role="navigation"
        aria-label="Primary Navigation"
      >
        <div className="nav-container">
          {/* Logo */}
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            Innovatetech
          </a>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#courses" onClick={closeMenu}>Courses</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
          </ul>

          {/* CTA Button (Desktop Only) */}
          <a
            href="https://forms.gle/jRGBXg4mVbCRQ4LQ8"
            className="nav-btn"
          >
            Book Free Demo
          </a>

          {/* Hamburger Button */}
          <button
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </button>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu} />}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919836196136?text=Hello!%20I%20want%20to%20know%20more%20about%20Innovatetech%20courses."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </>
  );
};

export default Navbar;
