import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// WhatsApp Floating Button
const WhatsAppFloat = () => {
  if (typeof document === "undefined") return null;

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

  // Smooth scroll for links
  const handleNavClick = (e, id) => {
  e.preventDefault();

  const section = document.getElementById(id);
  if (section) {
    window.history.pushState(null, "", `#${id}`); // ✅ update URL
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  }
};


  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, "home")}>
            Innovatetech
          </a>

          <ul className="nav-links desktop">
            <li><a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a></li>
            <li><a href="#courses" onClick={(e) => handleNavClick(e, "courses")}>Courses</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a></li>
            <li><a href="#reviews" onClick={(e) => handleNavClick(e, "reviews")}>Reviews</a></li>
          </ul>

          <a
            href="https://forms.gle/jRGBXg4mVbCRQ4LQ8"
            className="nav-btn desktop"
            target="_blank"
            rel="noopener noreferrer"
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
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
            <a href="#courses" onClick={(e) => handleNavClick(e, "courses")}>Courses</a>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
            <a href="#reviews" onClick={(e) => handleNavClick(e, "reviews")}>Reviews</a>

            <a
              href="https://forms.gle/jRGBXg4mVbCRQ4LQ8"
              className="mobile-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Free Demo
            </a>
          </div>
        )}
      </nav>

      <WhatsAppFloat />
    </>
  );
};

export default Navbar;
