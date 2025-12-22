// src/components/Navbar/Navbar.jsx
import { useState, useEffect, useCallback } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


/**
 * Primary navigation bar component
 * - Sticky with scroll-aware styling
 * - Responsive desktop & mobile navigation
 * - Accessible and production-ready
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Toggle mobile navigation menu
   */
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  /**
   * Close mobile menu on link click
   */
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  /**
   * Detect scroll position to apply navbar background
   */
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
          {/* Logo / Brand */}
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            Innovatetech
          </a>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#courses" onClick={closeMenu}>Courses</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
            <li>
              <a href="#reviews" onClick={closeMenu}>Reviews</a>
            </li>
          </ul>

          {/* Call To Action */}
          <a href="https://forms.gle/jRGBXg4mVbCRQ4LQ8" className="nav-btn">
            Book Free Demo
          </a>

          {/* Mobile Hamburger */}
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

      {/* Floating WhatsApp Contact */}
      <a
        href="https://wa.me/919836196136?text=Hello!%20I%20want%20to%20know%20more%20about%20Innovatetech%20courses."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

    </>
  );
};

export default Navbar;
