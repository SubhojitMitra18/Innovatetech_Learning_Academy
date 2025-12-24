import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppFloat = () => {
  return ReactDOM.createPortal(
    <a
      href="https://wa.me/919836196136"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>,
    document.body
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            Innovatetech
          </a>

          <ul className="nav-links desktop">
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>

          <a
            href="https://forms.gle/jRGBXg4mVbCRQ4LQ8"
            className="nav-btn desktop"
          >
            Book Free Demo
          </a>

          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#courses" onClick={closeMenu}>Courses</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>

            <a
              href="https://forms.gle/jRGBXg4mVbCRQ4LQ8"
              className="mobile-cta"
              onClick={closeMenu}
            >
              Book Free Demo
            </a>
          </div>
        )}
      </nav>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </>
  );
};

export default Navbar;
