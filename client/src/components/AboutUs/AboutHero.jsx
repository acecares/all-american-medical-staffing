import React from "react";
import "./AboutUs.css";

const AboutHero = () => (
  <section>
    {/* Hero Section */}
    <div className="about-hero">
      <div className="about-hero-content">
        <div className="about-hero-left">
          <h2>About Us</h2>
          <p className="tagline">Caring for Communities • Empowering Healthcare Professionals</p>
          <p>
            All American Medical Staffing is a nationwide healthcare staffing and recruitment agency 
            dedicated to connecting skilled medical professionals with quality healthcare facilities. 
            We take pride in supporting hospitals, clinics, and long-term care centers by providing 
            qualified nurses, caregivers, and allied health professionals who deliver compassionate care.
          </p>
        </div>
        <img src="/doctors-nurses-team-portrait-hospital-clinic-medical-office-diversity-health-healthcare-professionals-standing-together-arms-crossed-confidence-teamwork-collaboration-support.jpg" alt="All American Medical Staffing Team" />
      </div>
    </div>

    {/* Detailed About Section */}
    <div className="about-detailed">
      <div className="about-detailed-content">
        <h3>Our Commitment to Excellence</h3>
        <p>
          Founded with a mission to improve healthcare delivery, 
          All American Medical Staffing helps bridge the gap between 
          healthcare facilities and talented professionals. 
          We specialize in recruiting experienced nurses, CNAs, 
          medical assistants, and healthcare specialists who share our 
          passion for service and excellence.
        </p>

        <p>
          Our dedicated team ensures a smooth and efficient placement process 
          by handling compliance, credentialing, and onboarding for both 
          short-term and long-term assignments. We go beyond staffing — 
          we build trusted relationships that enhance patient outcomes 
          and empower healthcare professionals to thrive.
        </p>

        <h3>Why Choose All American Medical Staffing?</h3>
        <ul>
          <li>Comprehensive support for nurses and healthcare workers.</li>
          <li>Trusted by leading hospitals, clinics, and care centers nationwide.</li>
          <li>Personalized onboarding and compliance assistance.</li>
          <li>Flexible contracts — per diem, travel, and permanent placement.</li>
        </ul>

        <h3>Our Vision</h3>
        <p>
          To be the preferred healthcare staffing agency known for integrity, 
          reliability, and excellence — empowering medical professionals 
          and strengthening healthcare systems across America.
        </p>
      </div>
    </div>
  </section>
);

export default AboutHero;
