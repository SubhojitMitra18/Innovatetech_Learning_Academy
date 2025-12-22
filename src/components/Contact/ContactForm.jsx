import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 👉 Actual email sending function
  const sendEmail = async () => {
    setLoading(true);

    try {
      await emailjs.send(
        "service_1tjr5ro",
        "template_ldqityn",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: formData.course,
          message: formData.message,
        },
        "lA_sKUPniGfJ3dZVj"
      );

      Swal.fire({
        icon: "success",
        title: "Inquiry Submitted Successfully",
        text: "Email sent successfully. Our team will contact you shortly 🚀",
        confirmButtonColor: "#3085d6",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      Swal.fire({
        icon: "error",
        title: "Email Failed",
        text: "Something went wrong while sending the email. Please try again.",
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  };

  // 👉 Submit handler with confirmation
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "warning",
      title: "Confirm Email Address",
      html: `
        <p>Please confirm that this email address is correct:</p>
        <strong>${formData.email}</strong>
      `,
      showCancelButton: true,
      confirmButtonText: "Yes, Send Inquiry",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        sendEmail(); // ✅ Send email only after confirmation
      }
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Start your learning journey with us today
        </p>
      </div>

      <div className="contact-container">
        {/* LEFT : FORM */}
        <div className="contact-box">
          <h3 className="box-title">Send an Inquiry</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <select
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="Python AI/ML">Python AI / ML</option>
              <option value="React JS">React JS</option>
              <option value="DSA with Java">DSA with Java</option>
              <option value="Kids Computer">Kids Computer Course</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        </div>

        {/* RIGHT : INFO */}
        <div className="contact-box">
          <h3 className="box-title">Contact Details</h3>

          <div className="info-block">
            <p className="brand-name">Innovatetech Learning Academy</p>
            <p className="muted">
              Computer Training & Skill Development Center
            </p>
            <span className="badge">ISO & MSME Registered</span>
          </div>

          <div className="info-block">
            <p>
              <strong>📞</strong>{" "}
              <a href="tel:+919836196136" className="footer-link">
                +91-9836196136
              </a>
            </p>
            <p>
              <strong>📧</strong>{" "}
              <a
                href="mailto:innovatetechsubhojit24@gmail.com"
                className="footer-link"
              >
                innovatetechsubhojit24@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-buttons">
            <a
              href="https://wa.me/919836196136"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn-whatsapp"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>

            <a
              href="https://forms.gle/7rNF2JgBSELDv7HC6"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn-form"
            >
              📝 Internship
            </a>

            <a
              href="https://forms.gle/mwdLseiD6MB4DsJa7"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn-email"
            >
              📧 Send CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
