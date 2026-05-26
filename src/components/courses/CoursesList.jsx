import React, { useState, useRef } from "react";
import CourseCard from "./CourseCard";
import courses from "./coursesdata";
import "./courses.css";

const extraCourses = [
  {
    id: 101,
    name: "Basic Web Design",
    description: "Learn HTML, CSS, and responsive design from scratch.",
    duration: "2 Months",
  },
  {
    id: 102,
    name: "Java Spring Boot",
    description:
      "Build enterprise-level backend applications using Spring Boot.",
    duration: "3 Months",
  },
  {
    id: 103,
    name: "React + GIS",
    description:
      "Learn to integrate GIS mapping with modern React applications.",
    duration: "3 Months",
  },
  {
    id: 104,
    name: "Python Django",
    description:
      "Build secure and scalable web applications using Django framework.",
    duration: "3 Months",
  },
  {
    id: 105,
    name: "PHP Laravel",
    description:
      "Develop modern PHP applications using the Laravel framework.",
    duration: "6 Months",
  },
];

const CoursesList = () => {
  const [showMore, setShowMore] = useState(false);
  const moreRef = useRef(null);

  const toggleMoreCourses = () => {
    setShowMore((prev) => !prev);

    // Smooth scroll when opening
    setTimeout(() => {
      moreRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        <h2 className="section-title">Our Popular Courses</h2>

        <p className="section-subtitle">
          Industry-ready programs designed to help students and professionals
          gain practical skills and career confidence.
        </p>

        {/* Popular courses */}
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* More Courses Button */}
        <div className="more-courses-btn-wrapper">
          <button
            className="more-courses-btn"
            onClick={toggleMoreCourses}
          >
            {showMore ? "View Less Courses" : "View More Courses"}
          </button>
        </div>

        {showMore && (
          <div ref={moreRef} className="extra-courses">
            <h3 className="extra-courses-title">More Courses</h3>

            <div className="courses-grid">
              {extraCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesList;
