import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      {/* Badge */}
      <div className="course-badge">Popular</div>

      {/* Course Title */}
      <h3 className="course-title">{course.name}</h3>

      {/* Description */}
      <p className="course-desc">{course.description}</p>

      {/* Course Info */}
      <div className="course-info">
        <span>⏳ Duration: {course.duration}</span>
        <span>🎓 Certificate Included</span>
        <span>🧠 Practical & Project Based</span>
      </div>

      {/* CTA Button */}
      <a
        href={`https://wa.me/919836196136?text=Hello! I want to enroll in the course: ${course.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="enroll-btn"
      >
        Enroll now →
      </a>
    </div>
  );
};

export default CourseCard;