import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (inputCode.trim().toUpperCase() === "SUCCESS") {
      window.location.href = "/coverage-areas";
    } else {
      setError("Invalid access code.");
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setInputCode("");
    setError("");
  };

  return (
    <div className="home-container">
      <img
        src="/main-logo.png"
        alt="Logo"
        style={{ width: "250px", position: "relative", top: "20px" }}
      />
      <h1 className="title">All American Medical Staffing</h1>

      <div className="card-grid">
        <div
          className="card"
          onClick={() => (window.location.href = "/healthcare-staffing")}
        >
          <h2>Healthcare Staffing</h2>
        </div>
        <div className="card" onClick={() => setShowModal(true)}>
          <h2>Coverage Areas</h2>
        </div>
        <div
          className="card"
          onClick={() => (window.location.href = "/services")}
        >
          <h2>Services</h2>
        </div>
        <div className="card" onClick={() => (window.location.href = "/about")}>
          <h2>About Us</h2>
        </div>
        <div
          className="card"
          onClick={() => (window.location.href = "/vision")}
        >
          <h2>Mission & Vision</h2>
        </div>
        <div
          className="card"
          onClick={() => (window.location.href = "/contact")}
        >
          <h2>Contact Us</h2>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Enter Access Code for Coverage Areas</h2>
            <input
              type="text"
              placeholder="Enter access code"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <div className="modal-actions">
              <button onClick={handleVerify}>
                <p>Verify & Continue</p>
              </button>
              <button className="cancel" onClick={handleClose}>
                <p>Cancel</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
