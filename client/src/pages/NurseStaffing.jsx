import React from "react";
import "./NurseStaffing.css";
import Navbar from "../../src/components/Navbar/Navbar";

const NurseStaffing = () => {
  return (
    <div className="nurse-staffing-page">
      {/* Banner Section */}
      <Navbar /> 
      <section className="services-banner-section">
        <img
          src="/nurse-staffing.jpg"
          alt="All American Medical Staffing nurses working together"
          className="services-banner"
        />
        <div className="banner-overlay">
          <h1 className="banner-title">Nurse Staffing</h1>
          <p className="banner-subtitle">
            Delivering top-quality nurses for hospitals, clinics, and healthcare
            facilities across the nation.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="nurse-intro">
        <h2>Connecting Skilled Nurses with Trusted Healthcare Providers</h2>
        <p>
          At <strong>All American Medical Staffing</strong>, we specialize in
          providing dependable and highly qualified nursing professionals to
          meet the ever-evolving needs of healthcare organizations. Whether
          you’re seeking temporary, per diem, or long-term staffing, our nurses
          are ready to step in and deliver exceptional patient care.
        </p>
      </section>

      {/* Services Grid */}
      <section className="nurse-services">
        <h2>Our Nursing Staffing Solutions Include:</h2>
        <div className="nurse-services-grid">
          <div className="nurse-card">
            <h3>Registered Nurses (RNs)</h3>
            <p>
              Expertly trained and licensed professionals available for clinical
              and hospital settings.
            </p>
          </div>
          <div className="nurse-card">
            <h3>Licensed Practical Nurses (LPNs)</h3>
            <p>
              Compassionate caregivers offering hands-on patient care in diverse
              healthcare environments.
            </p>
          </div>
          <div className="nurse-card">
            <h3>Certified Nursing Assistants (CNAs)</h3>
            <p>
              Dedicated professionals assisting with daily living activities and
              ensuring patient comfort.
            </p>
          </div>
          <div className="nurse-card">
            <h3>Specialty Nurses</h3>
            <p>
              ICU, ER, OR, and Pediatric nurses equipped to handle specialized
              healthcare demands.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="nurse-why-choose">
        <h2>Why Choose Our Nurse Staffing Solutions?</h2>
        <ul>
          <li>✔️ Rigorous candidate screening and credentialing</li>
          <li>✔️ Nationwide network of qualified healthcare professionals</li>
          <li>✔️ Flexible contracts for short-term or long-term coverage</li>
          <li>✔️ 24/7 client support and staffing assistance</li>
          <li>✔️ Focus on compliance, safety, and patient satisfaction</li>
        </ul>
      </section>

      {/* Call-to-Action */}
      <section className="nurse-cta">
        <h2>Partner with Us Today</h2>
        <p>
          Let our dedicated team help you find the right nursing professionals
          for your healthcare organization.
        </p>
        <a
          href="https://web.link2newsite.com/acecc/allamericaor277/healthcare-staffing-services/nurse-staffing"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Learn More
        </a>
      </section>
    </div>
  );
};

export default NurseStaffing;
