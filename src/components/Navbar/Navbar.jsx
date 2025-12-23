import { useState, useEffect, useCallback } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            Innovatetech
          </a>

          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#courses" onClick={closeMenu}>Courses</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
          </ul>

          <a
            href="https://forms.gle/jRGBXg4mVbCRQ4LQ8"
            className="nav-btn"
          >
            Book Free Demo
          </a>

          {/* ☰ / ✕ Button */}
          <button
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu} />}

      <a
        href="https://wa.me/919836196136"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </>
  );
};

export default Navbar;
