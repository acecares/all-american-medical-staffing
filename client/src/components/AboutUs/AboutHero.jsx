import React from "react";
import "./AboutUs.css";
// import Navbar from "../../components/Navbar/Navbar";

const AboutHero = () => {
  return (
    <div className="about-page">
      {/* <Navbar /> */}

      {/* Banner Section */}
      <section className="about-banner-section">
        <img
          src="/about-us-medical.jpg"
          alt="All American Medical Staffing team"
          className="about-banner"
        />
        <div className="banner-overlay">
          <h1 className="banner-title">About Us</h1>
          <p className="banner-subtitle">
            Building strong healthcare teams through trust, compassion, and excellence.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="about-main">
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            <strong>All American Medical Staffing</strong> is a trusted healthcare staffing
            agency dedicated to providing professional, dependable, and compassionate staff
            for healthcare organizations across the nation. We specialize in connecting
            skilled nurses, management leaders, and healthcare professionals with
            facilities that share their passion for quality care.
          </p>
          <p>
            Our goal is to help medical providers maintain the highest standards of
            patient care while ensuring healthcare professionals have rewarding and
            fulfilling career opportunities. We work with hospitals, clinics, and
            home-health agencies to ensure reliable, flexible, and compliant staffing
            solutions.
          </p>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="about-values">
        <h2>Our Mission</h2>
        <p>
          To serve as the bridge between exceptional healthcare professionals and
          organizations that need them — fostering excellence, compassion, and trust in
          every placement we make.
        </p>

        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>
              We operate with honesty, accountability, and transparency in every client
              and candidate interaction.
            </p>
          </div>
          <div className="value-card">
            <h3>Compassion</h3>
            <p>
              We believe in serving others with care, empathy, and respect for every
              healthcare worker and patient.
            </p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>
              We hold ourselves to the highest standards in compliance, service, and
              professional quality.
            </p>
          </div>
          <div className="value-card">
            <h3>Dedication</h3>
            <p>
              Our team works tirelessly to ensure every healthcare facility receives the
              right staff — on time, every time.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="about-why">
        <h2>Why Choose All American Medical Staffing?</h2>
        <ul>
          <li>✔️ Nationwide coverage with local recruitment support.</li>
          <li>✔️ Comprehensive vetting and credentialing process.</li>
          <li>✔️ Flexible staffing options — per diem, travel, and permanent.</li>
          <li>✔️ Dedicated 24/7 client support and compliance monitoring.</li>
          <li>✔️ Commitment to quality and long-term partnership.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutHero;
