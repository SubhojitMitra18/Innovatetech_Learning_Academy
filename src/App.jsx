import { useEffect, useCallback } from "react";
import "./App.css";

// Layout Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Page Sections
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import CoursesList from "./components/Courses/CoursesList";
import Reviews from "./components/Reviews/Reviews"; // ⬅ Imported Reviews
import ContactForm from "./components/Contact/ContactForm";

function App() {
  // Set page title
  useEffect(() => {
    document.title =
      "Innovatetech Learning Academy | Learn Python, AI/ML, React & DSA";
  }, []);

  // Back to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="app-container">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero-wrapper" aria-label="Hero Section">
          <Hero />
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="section-wrapper full-width"
          aria-label="About Innovatetech"
        >
          <About />
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section
          id="why-us"
          className="section-wrapper grey-bg full-width"
          aria-label="Why Choose Us"
        >
          <WhyChooseUs />
        </section>

        {/* ================= COURSES ================= */}
        <section
          id="courses"
          className="section-wrapper full-width"
          aria-label="Courses Offered"
        >
          <CoursesList />
        </section>

        {/* ================= REVIEWS ================= */}
        <section
          id="reviews"
          className="section-wrapper grey-bg full-width"
          aria-label="Customer Reviews"
        >
          <Reviews />
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="section-wrapper grey-bg full-width"
          aria-label="Contact Form"
        >
          <ContactForm />
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}

export default App;
