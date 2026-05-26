// src/components/Hero/Hero.jsx
import "./Hero.css";

/**
 * Hero section
 * Primary value proposition and call-to-action area
 */
const Hero = () => {
  return (
    <section id="home" className="hero" aria-label="Hero Section">
      <div className="hero-container">
        {/* ================= LEFT CONTENT ================= */}
        <div className="hero-left">
          <h1 className="hero-title">
            Build Skills for the Future with
            <span className="highlight">
              {" "}
              Innovatetech Learning Academy
            </span>
          </h1>

          <p className="hero-description">
            Learn industry-relevant skills in Python, AI/ML, React JS, and Data
            Structures through hands-on projects, expert mentorship, and
            real-world use cases.
          </p>

          {/* ================= CTA BUTTONS ================= */}
          <div className="hero-buttons">
            <a href="https://forms.gle/jRGBXg4mVbCRQ4LQ8" className="btn-primary">
              Book Free Demo
            </a>
            <a href="#courses" className="btn-secondary">
              Explore Courses
            </a>
          </div>

          {/* ================= TRUST INDICATORS ================= */}
          <ul className="trust-badges" aria-label="Trust indicators">
            {/* MSME Certificate */}
            <li className="certificate-item">
              ✔ MSME Registered
              <div className="certificate-preview">
                <a
                  href="/certificates/msme.pdf" // 🔁 replace with your MSME PDF/JPG link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./certificates/msme.jpeg" // 🔁 replace with preview image
                    alt="MSME Registration Certificate"
                  />
                  <span>View Certificate</span>
                </a>
              </div>
            </li>

            {/* ISO Certificate */}
            <li className="certificate-item">
              ✔ ISO Certified
              <div className="certificate-preview">
                <a
                  href="/certificates/iso.pdf" // 🔁 replace with your ISO PDF/JPG link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/certificates/iso.jpg" // 🔁 replace with preview image
                    alt="ISO Certification Certificate"
                  />
                  <span>View Certificate</span>
                </a>
              </div>
            </li>

            <li className="feature-item">
  <span className="feature-icon">✔</span>
  <span>100% Practical Learning</span>
</li>

          </ul>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="hero-right" aria-hidden="true">
          <img
            src="hero-illustration.png"
            alt="Students learning modern technology skills"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
