import React from "react";
import "./WhyChooseUs.css";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaCertificate,
  FaUserGraduate,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const items = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Trainers",
      desc: "Learn from industry experts with real-world project experience.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Practical Learning",
      desc: "Hands-on training with projects, assignments, and coding practice.",
    },
    {
      icon: <FaCertificate />,
      title: "ISO & MSME Certified",
      desc: "Get recognized certification that adds value to your career.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Student-Friendly Fees",
      desc: "Affordable courses with high-quality training for all learners.",
    },
  ];

  return (
    <section className="why-section" id="whyus">
      <div className="why-container">
        <h2 className="why-title">Why Choose Innovatetech?</h2>

        <div className="why-grid">
          {items.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">
                <span>{item.icon}</span>
              </div>

              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
