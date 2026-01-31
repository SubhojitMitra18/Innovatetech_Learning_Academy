import "./Ribbon.css";

const LotusIcon = () => (
  <svg
    className="lotus-svg"
    width="28"
    height="28"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="lotusGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fffde7" />
        <stop offset="50%" stopColor="#fff176" />
        <stop offset="100%" stopColor="#fbc02d" />
      </linearGradient>
    </defs>

    <path
      d="M32 8c6 10 16 16 16 28 0 8-6 14-16 14s-16-6-16-14c0-12 10-18 16-28z"
      fill="url(#lotusGradient)"
    />
  </svg>
);

const Ribbon = () => {
  return (
    <div className="ribbon">
      {/* Left lotus */}
      <div className="ribbon-deco lotus-left">
        <LotusIcon />
      </div>

      {/* Marquee */}
      <div className="ribbon-marquee">
        <div className="ribbon-track">
          🌼 Happy Saraswati Puja & Vasant Panchami 🌼
          May Maa Saraswati bless you with wisdom, learning & creativity
          at Innovatetech Learning Academy

          <a href="#courses" className="ribbon-cta glitter-cta">
            Start Learning
          </a>

          <span className="ribbon-gap" />

          🌼 Happy Saraswati Puja & Vasant Panchami 🌼
          Empower your future with knowledge

          <a href="#contact" className="ribbon-cta glitter-cta">
            Enroll Today
          </a>
        </div>
      </div>

      {/* Right lotus */}
      <div className="ribbon-deco lotus-right">
        <LotusIcon />
      </div>
    </div>
  );
};

export default Ribbon;
