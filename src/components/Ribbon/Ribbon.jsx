import "./Ribbon.css";

const Ribbon = () => {
  return (
    <div className="ribbon">
      <div className="ribbon-marquee">
        <div className="ribbon-track">
          🚀 FREE LIVE WEBINAR 🚀
          Why Machine Learning Should Be Learned Before Deep Learning

          📅 26th May 2026
          ⏰ 7:30 PM – 8:30 PM IST
          🎓 E-Certificate Will Be Provided
          💯 Free of Cost

          <a
            href="https://forms.gle/Q8G5rGLBDWbpBwKR9"
            target="_blank"
            rel="noopener noreferrer"
            className="ribbon-cta glitter-cta"
          >
            Register Now
          </a>

          <span className="ribbon-gap" />

          🚀 INNOVATETECH LEARNING ACADEMY 🚀
          ISO 9001:2015 Certified | MSME Registered

          <a
            href="#courses"
            className="ribbon-cta glitter-cta"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;