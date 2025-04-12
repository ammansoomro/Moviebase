import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="nav bg-neutral-100 flex flex-align-center flex-justify-between p-xl">
        <div className="heading-2 blanka color-primary">MovieBase</div>
        <span className="footer__copyright">
        &copy; {new Date().getFullYear()} MovieBase. All rights reserved.
      </span>
    </div>
  );
}

export default Footer;
