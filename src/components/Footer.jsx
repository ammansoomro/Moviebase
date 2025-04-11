import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__brand">MovieBase</h1>
      <span className="footer__copyright">
        &copy; {new Date().getFullYear()} MovieBase. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
