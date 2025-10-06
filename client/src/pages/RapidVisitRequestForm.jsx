import React from "react";
import "./RapidVisitRequestForm.css";
import Navbar from "../../src/components/Navbar/Navbar";


const RapidVisitRequestForm = () => {
  return (
    <div className="rapid-visit-page">
    <Navbar /> 
      {/* Banner Section */}
      <section className="services-banner-section">
        <img
          src="/contact-us-img.jpg"
          alt="Rapid Visit Request - All American Medical Staffing"
          className="services-banner"
        />
        <div className="banner-overlay">
          <h1 className="banner-title">Rapid Visit Request Form</h1>
          <p className="banner-subtitle">
            Immediate staffing solutions for urgent healthcare facility needs.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="rapid-intro">
        <h2>Quick Staffing Support When You Need It Most</h2>
        <p>
          At <strong>All American Medical Staffing</strong>, we know that urgent
          situations arise — and healthcare cannot wait. Our Rapid Visit Request
          Form helps your facility get quick access to licensed, ready-to-work
          professionals for immediate shifts, visits, or coverage needs.
        </p>
      </section>

      {/* Form Section */}
      <section className="rapid-form-section">
        <h2>Request a Rapid Staffing Visit</h2>
        <form className="rapid-form">
          {/* Facility Details */}
          <div className="form-row">
            <div className="form-group">
              <label>Facility Name</label>
              <input type="text" placeholder="Enter facility name" />
            </div>
            <div className="form-group">
              <label>Contact Person</label>
              <input type="text" placeholder="Enter contact person name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email address" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
          </div>

          {/* Staffing Details */}
          <div className="form-row">
            <div className="form-group">
              <label>Type of Staff Needed</label>
              <select>
                <option value="">Select type</option>
                <option value="Registered Nurse">Registered Nurse (RN)</option>
                <option value="Licensed Practical Nurse">
                  Licensed Practical Nurse (LPN)
                </option>
                <option value="Certified Nursing Assistant">
                  Certified Nursing Assistant (CNA)
                </option>
                <option value="Therapist">Therapist</option>
                <option value="Administrative Staff">
                  Administrative Staff
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>Number of Staff Required</label>
              <input type="number" placeholder="e.g., 3" min="1" />
            </div>
          </div>

          {/* Visit Details */}
          <div className="form-row">
            <div className="form-group">
              <label>Requested Start Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Shift Time / Duration</label>
              <input type="text" placeholder="e.g., 8:00 AM - 4:00 PM" />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Facility Address</label>
            <textarea rows="2" placeholder="Enter address"></textarea>
          </div>

          <div className="form-group full-width">
            <label>Additional Comments / Notes</label>
            <textarea rows="3" placeholder="Enter any special instructions"></textarea>
          </div>

          <div className="form-submit">
            <button type="submit">Submit Request</button>
          </div>
        </form>
      </section>

      {/* CTA Section */}
      <section className="rapid-cta">
        <h2>Need Immediate Assistance?</h2>
        <p>
          Call our support team directly for urgent staffing requirements — we’re
          available 24/7 to help you meet your care demands.
        </p>
        <a
          href="https://web.link2newsite.com/acecc/allamericaor277/healthcare-staffing-services/rapid-visit-request-form"
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

export default RapidVisitRequestForm;
