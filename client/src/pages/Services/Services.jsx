import React from "react";
import "./Services.css";
import Navbar from "../../components/Navbar/Navbar";
// import servicesBanner from ""; // make sure the image is saved here

const serviceItems = [
  {
    title: "Nurse Staffing",
    description:
      "Registered Nurses (RN), Licensed Practical/Vocational Nurses (LPN/LVN), and CNAs for hospitals, clinics, and home health — per diem, travel, and permanent placement.",
    href: "/nurse-staffing",
  },
  {
    title: "Management Staff Placement",
    description:
      "Direct-hire and interim placement for Directors of Nursing, Nurse Managers, Administrators, Clinical Leaders, and other healthcare management roles.",
    href: "https://web.link2newsite.com/acecc/allamericaor277/healthcare-staffing-services/management-staff-placement",
  },
  {
    title: "Rapid Visit Request Form",
    description:
      "Need coverage fast? Submit a Rapid Visit Request and our team will respond quickly with qualified nurses and staff for immediate assignments.",
    href: "https://web.link2newsite.com/acecc/allamericaor277/healthcare-staffing-services/rapid-visit-request-form",
  },
];

const Services = () => {
  return (
    <main>
      <Navbar />
      <section className="services-banner-section">
  <img
    src="/services-banner.jpg"
    alt="All American Medical Staffing nurses working together"
    className="services-banner"
  />
  <div className="banner-overlay">
    <h1 className="banner-title">Healthcare Staffing Services</h1>
    <p className="banner-subtitle">
      Empowering healthcare organizations with trusted, qualified nursing professionals.
    </p>
  </div>
</section>


      <section className="services-section">
        <h2 className="services-heading">Our Core Services</h2>

        <div className="services-grid">
          {serviceItems.map((item, idx) => (
            <a
              key={idx}
              className="service-card"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`${item.title} (opens in a new tab)`}
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span className="service-link">Learn More ↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
