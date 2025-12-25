import "./Ribbon.css";

const BellIcon = () => (
  <svg
    className="bell-svg"
    width="28"
    height="28"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bellGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff3b0" />
        <stop offset="50%" stopColor="#ffd54f" />
        <stop offset="100%" stopColor="#ffb300" />
      </linearGradient>
    </defs>

    <path
      d="M32 6c-8 0-14 6-14 14v8c0 3-2 6-4 8l-2 3h40l-2-3c-2-2-4-5-4-8v-8c0-8-6-14-14-14z"
      fill="url(#bellGradient)"
    />
    <circle cx="32" cy="48" r="4" fill="#ff8f00" />
  </svg>
);

const Ribbon = () => {
  return (
    <div className="ribbon">
      {/* Left ringing bell */}
      <div className="ribbon-deco bell-left">
        <BellIcon />
      </div>

      {/* Marquee */}
      <div className="ribbon-marquee">
        <div className="ribbon-track">
          🎄 Merry Christmas & 🎉 Happy New Year 2026 from Innovatetech Learning Academy!

          <a href="#courses" className="ribbon-cta glitter-cta">
            Explore Courses
          </a>

          <span className="ribbon-gap" />

          🎄 Merry Christmas & 🎉 Happy New Year 2026 from Innovatetech Learning Academy!

          <a href="#contact" className="ribbon-cta glitter-cta">
            Enroll Now
          </a>
        </div>
      </div>

      {/* Right ringing bell */}
      <div className="ribbon-deco bell-right">
        <BellIcon />
      </div>
    </div>
  );
};

export default Ribbon;
