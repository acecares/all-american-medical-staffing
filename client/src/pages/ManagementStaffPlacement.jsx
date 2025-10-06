import React from "react";
import "./ManagementStaffPlacement.css";
import Navbar from "../../src/components/Navbar/Navbar";

const ManagementStaffPlacement = () => {
  return (
    <div className="management-page">
        <Navbar /> 
      {/* Banner Section */}
      <section className="services-banner-section">
        <img
          src="/management-staffing.jpg"
          alt="All American Medical Staffing management staff"
          className="services-banner"
        />
        <div className="banner-overlay">
          <h1 className="banner-title">Management Staff Placement</h1>
          <p className="banner-subtitle">
            Reliable leadership professionals for efficient, compliant, and
            high-performing healthcare operations.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="management-intro">
        <h2>Empowering Healthcare Facilities with Experienced Leaders</h2>
        <p>
          At <strong>All American Medical Staffing</strong>, we understand that
          the strength of a healthcare organization lies in its leadership. Our
          management staff placement services ensure that you have access to
          qualified, dependable, and experienced professionals who can guide
          your teams toward excellence in care delivery and compliance.
        </p>
      </section>

      {/* Management Roles Section */}
      <section className="management-roles">
        <h2>We Provide Placement for:</h2>
        <div className="roles-grid">
          <div className="role-card">
            <h3>Clinical Managers</h3>
            <p>
              Experts overseeing patient care delivery, compliance, and
              coordination between teams.
            </p>
          </div>
          <div className="role-card">
            <h3>Director of Nursing (DON)</h3>
            <p>
              Experienced leaders managing clinical staff and ensuring adherence
              to healthcare standards and best practices.
            </p>
          </div>
          <div className="role-card">
            <h3>Operations Managers</h3>
            <p>
              Professionals who streamline facility operations, budgeting, and
              resource allocation for optimal efficiency.
            </p>
          </div>
          <div className="role-card">
            <h3>Human Resource Managers</h3>
            <p>
              Specialists in healthcare recruitment, compliance, and staff
              retention strategies.
            </p>
          </div>
          <div className="role-card">
            <h3>Administrative Supervisors</h3>
            <p>
              Skilled in overseeing daily functions, scheduling, and ensuring
              smooth organizational workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="management-why-choose">
        <h2>Why Choose All American Medical Staffing?</h2>
        <ul>
          <li>✔️ Extensive network of healthcare management professionals</li>
          <li>✔️ Quick placement turnaround for urgent leadership vacancies</li>
          <li>✔️ Compliance-driven and credential-verified hiring</li>
          <li>✔️ Custom matching to meet your organization’s culture and goals</li>
          <li>✔️ Nationwide coverage with local expertise</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="management-cta">
        <h2>Partner with Us for Your Next Leadership Hire</h2>
        <p>
          Let our experienced recruiters help you find the right management
          professionals to strengthen your healthcare team.
        </p>
        <a
          href="https://web.link2newsite.com/acecc/allamericaor277/healthcare-staffing-services/management-staff-placement"
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

export default ManagementStaffPlacement;
