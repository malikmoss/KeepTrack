import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

function LandingPage() {
    return (
        <div>
          <div>
          <Link to="/login" className="landing-button">Login</Link>
          <Link to="/sign-up" className="landing-button">Sign Up</Link>
          </div>
          <div className="landing-main-section">
            <h1>Welcome to the landing page</h1>
           </div> 
        </div>
    )
}

export default LandingPage
