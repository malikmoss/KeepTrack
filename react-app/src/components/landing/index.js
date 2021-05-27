import React from "react";
import { Link } from "react-router-dom";
import landing from "./landing-image.jpg"
import "./LandingPage.css";

function LandingPage() {
  return (
    <div style={{ marginTop: "95px" }}>
      <div className="landing-main-section">
        <h1>the number 1 inventory app!</h1>
      </div>
      <img className="landing-img" src={landing} alt='landing' />
      
      <footer className="footer-master">
            <a  href="https://github.com/malikmoss" target="_blank">
                Github
            </a>

            <a  href="https://www.linkedin.com/in/cedmoss/" target="_blank">
                LinkedIn
            </a>

            <a href="https://github.com/malikmoss/KeepTrack" target="_blank">
                Repo
            </a>
        </footer>
    </div>
  );
}

export default LandingPage;
