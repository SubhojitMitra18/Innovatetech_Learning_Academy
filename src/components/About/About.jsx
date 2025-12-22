// src/components/About/About.jsx
import { useEffect, useState } from "react";
import "./About.css";
import {
  FaLaptopCode,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";

/**
 * About section
 * Communicates mission, credibility, and learning approach
 */
const About = () => {
  const [stats, setStats] = useState({
    students: 0,
    projects: 0,
    courses: 0,
  });

  /**
   * Animated counter effect
   */
  useEffect(() => {
    const targets = {
      students: 50,
      projects: 10,
      courses: 4,
    };

    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setStats({
        students: Math.floor(progress * targets.students),
        projects: Math.floor(progress * targets.projects),
        courses: Math.floor(progress * targets.courses),
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section
      id="about"
      className="about-section"
      aria-label="About Innovatetech Learning Academy"
    >
      <div className="about-container">
        {/* ================= LEFT CONTENT ================= */}
        <div className="about-left">
          <h2 className="about-title">
            Empowering Students with Future-Ready Tech Skills
          </h2>

          <p className="about-description">
            At <strong>Innovatetech Learning Academy</strong>, we combine modern
            teaching methodologies with real-world practical training. As an
            <strong> MSME & ISO certified</strong> institution, our mission is to
            deliver industry-aligned education that prepares learners for
            long-term success.
          </p>

          <p className="about-description">
            Whether you are a school student, college learner, or working
            professional, our programs in <strong>Python AI/ML</strong>,
            <strong> React JS</strong>, <strong>Java DSA</strong>, and
            <strong> foundational computer skills</strong> are designed to build
            strong fundamentals through hands-on projects.
          </p>

          {/* ================= HIGHLIGHTS ================= */}
          <div className="about-highlights">
            <div className="highlight-box">
              <FaLaptopCode className="highlight-icon" aria-hidden="true" />
              <span>Practical, Project-Based Learning</span>
            </div>

            <div className="highlight-box">
              <FaUserGraduate className="highlight-icon" aria-hidden="true" />
              <span>Beginner Friendly & Career Focused</span>
            </div>

            <div className="highlight-box">
              <FaChalkboardTeacher className="highlight-icon" aria-hidden="true" />
              <span>1:1 Mentorship from Expert Instructors</span>
            </div>
          </div>

          {/* ================= STATS ================= */}
          <div className="about-stats" aria-label="Academy statistics">
            <div className="stat-box">
              <h3>{stats.students}+</h3>
              <p>Students Trained</p>
            </div>
            <div className="stat-box">
              <h3>{stats.projects}+</h3>
              <p>Live Projects</p>
            </div>
            <div className="stat-box">
              <h3>{stats.courses}+</h3>
              <p>In-Demand Courses</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="about-right" aria-hidden="true">
          <img
            src="about.png"
            alt="Students learning programming and technology"
            className="about-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;