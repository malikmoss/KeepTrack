import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

function LandingPage() {
    return (
        <div>
          <Link to="/login" className="login-button">Login</Link>
          <div className="landing-main-section">
            <h1>Welcome to the landing page</h1>
           </div> 
           <div className="landing-links">
          </div>
        </div>
    )
}

export default LandingPage
