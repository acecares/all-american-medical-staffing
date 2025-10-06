import React from "react";
import "./Vision.css";
import Navbar from "../../src/components/Navbar/Navbar";

const Vision= () => {
  return (
    <div className="vision-page">
      <Navbar />

      {/* Banner Section */}
      <section className="vision-banner-section">
        <img
          src="/services-banner.jpg"
          alt="All American Medical Staffing Vision and Mission"
          className="vision-banner"
        />
        <div className="banner-overlay">
          <h1 className="banner-title">Our Mission & Vision</h1>
          <p className="banner-subtitle">
            Guiding the future of healthcare staffing through trust, compassion, and excellence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission at <strong>All American Medical Staffing</strong> is to
          bridge the gap between healthcare professionals and the facilities
          that need them most. We are dedicated to improving healthcare delivery
          by providing staffing solutions that prioritize integrity, compassion,
          and clinical excellence.
        </p>
        <p>
          We aim to empower healthcare providers and professionals by ensuring
          every placement is a perfect match — where skills meet purpose and
          patients receive the best care possible.
        </p>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          To be recognized as the leading healthcare staffing agency nationwide,
          setting the standard for quality, reliability, and compassion in every
          staffing partnership. We envision a healthcare system where every
          facility is supported with skilled, dedicated professionals who embody
          integrity and excellence.
        </p>
        <p>
          Through our continued commitment to innovation and human connection,
          we strive to make a lasting impact on both healthcare organizations
          and the professionals who serve them.
        </p>
      </section>
    </div>
  );
};

export default Vision;
