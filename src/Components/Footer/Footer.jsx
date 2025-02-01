import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-text" >
        <h2>Join BoxCar</h2>
        <p>Receive pricing updates, shopping tips & more!</p>
        </div>
        <div className="newsletter">
          <input type="email" placeholder="Your email address" />
          <button>Sign Up</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="column">
          <h3>Useful Links</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Finance</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="column">
          <h3>Quick Links</h3>
          <ul>
            <li>Get in Touch</li>
            <li>Help Center</li>
            <li>Live Chat</li>
            <li>How it Works</li>
          </ul>
        </div>

        <div className="column">
          <h3>Our Brands</h3>
          <ul>
            <li>Aston Martin</li>
            <li>Audi</li>
            <li>Bentley</li>
            <li>BMW</li>
            <li>Bugatti</li>
            <li>Ferrari</li>
            <li>Jaguar</li>
            <li>Lamborghini</li>
          </ul>
        </div>

        <div className="column">
          <h3>Vehicles Type</h3>
          <ul>
            <li>Pickup</li>
            <li>Coup</li>
            <li>Family MPV</li>
            <li>Sedan</li>
            <li>SUVs</li>
            <li>Sport Coupe</li>
            <li>Convertible</li>
            <li>Wagon</li>
          </ul>
        </div>

        <div className="column">
          <h3>Vehicles Type</h3>
          <button>Download on the Apple Store</button>
          <button>Get it on Google Play</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Boxcars.com. All rights reserved.</p>
        <p>Terms & Conditions &bull; Privacy Notice</p>
      </div>
    </footer>
  );
};

export default Footer;

