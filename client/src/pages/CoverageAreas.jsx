import React from "react";
import "./CoverageAreas.css";
import Navbar from "../../src/components/Navbar/Navbar";

const CoverageAreas = () => {
  return (
    <div className="coverage-page">
      <Navbar />

      {/* Banner Section */}
      <section className="coverage-banner-section">
        <img
          src="/services-banner.jpg"
          alt="All American Medical Staffing Coverage Areas"
          className="coverage-banner"
        />
        <div className="banner-overlay">
          <h1 className="banner-title">Coverage Areas</h1>
          <p className="banner-subtitle">
            Proudly serving healthcare facilities and professionals across the United States.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="coverage-intro">
        <h2>Nationwide Staffing Coverage</h2>
        <p>
          At <strong>All American Medical Staffing</strong>, we provide nurse and healthcare
          staffing services across multiple states — ensuring every facility, big or small,
          receives reliable, skilled professionals when they need them most.
        </p>
      </section>

      {/* Coverage Grid Section */}
      <section className="coverage-list">
        <h2>Our Service Regions</h2>
        <div className="states-grid">
          <div className="state-card">Texas</div>
          <div className="state-card">California</div>
          <div className="state-card">Florida</div>
          <div className="state-card">Georgia</div>
          <div className="state-card">Illinois</div>
          <div className="state-card">New York</div>
          <div className="state-card">Arizona</div>
          <div className="state-card">Nevada</div>
          <div className="state-card">North Carolina</div>
          <div className="state-card">Virginia</div>
          <div className="state-card">Ohio</div>
          <div className="state-card">Tennessee</div>
          <div className="state-card">Indiana</div>
          <div className="state-card">Pennsylvania</div>
          <div className="state-card">Alabama</div>
          <div className="state-card">Missouri</div>
          <div className="state-card">Oklahoma</div>
          <div className="state-card">South Carolina</div>
          <div className="state-card">Colorado</div>
          <div className="state-card">New Mexico</div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="coverage-benefits">
        <h2>Why Choose Us for Your State Staffing Needs?</h2>
        <ul>
          <li>✔️ Local recruiters who understand your community.</li>
          <li>✔️ Nationwide network of healthcare professionals ready to deploy.</li>
          <li>✔️ Compliance-focused placements meeting state-specific regulations.</li>
          <li>✔️ Fast turnaround for urgent and short-term staffing needs.</li>
          <li>✔️ Consistent quality and professionalism in every region we serve.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="coverage-cta">
        <h2>Need Healthcare Staffing in Your State?</h2>
        <p>
          Whether you operate a small clinic, a large hospital, or a home health agency,
          we’re here to help. Contact our team today for a staffing consultation.
        </p>
        <a
          href="https://web.link2newsite.com/acecc/allamericaor277/healthcare-staffing-coverage-areas"
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

export default CoverageAreas;
