import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <h1>Top companies choose <span>Jackson</span> Business to build in-demand career skills.</h1>
      <div className="list">
        <div>
          <ul>
            <li>Jackson Business</li>
            <li>Teach on Jackson</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>Investors</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookies Settings</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>
          </ul>
        </div>
      </div>
      <marquee>&copy; 2024 Jackson Academy. All rights reserved.</marquee>
    </div>
  );
}

export default Footer;
