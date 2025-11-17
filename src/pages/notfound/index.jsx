import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NotFound() {
  return (
    <div id="notfound">
      <div className="notfound-content" data-aos="zoom-in">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className="notfound-desc">
          The page you’re looking for seems to have vanished — much like fine lines after a visit to Orskin Aesthetic Clinic. Let’s guide you back to glowing skin and the right page!
        </p>

        <Link to="/">
          <button className="back-btn">Back to Home</button>
        </Link>
      </div>

      <div className="glow-circle"></div>
      <div className="glow-circle second"></div>
    </div>
  );
}

export default NotFound;
