import React from "react";
import brandLogo from "../images/logo.svg";
import fbIcon from "../images/icon-facebook.svg";
import instaIcon from "../images/icon-instagram.svg";
import pinIcon from "../images/icon-pinterest.svg";
import twitterIcon from "../images/icon-twitter.svg";
const Footer = () => {
  return (
    <footer id='Footer' className='Footer'>
      <div className='Footer__top'>
        <img className='Footer__logo' src={brandLogo} alt='brand Logo' />
        <ul className='Footer__links'>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>
      <div className='Footer__bottom'>
        <div className='Footer__icons'>
          <div>
            <img src={fbIcon} alt='facebook' />
          </div>
          <div>
            <img src={instaIcon} alt='instagram' />
          </div>
          <div>
            {" "}
            <img src={pinIcon} alt='pinterest' />
          </div>
          <div>
            {" "}
            <img src={twitterIcon} alt='twitter' />
          </div>
        </div>
        <p className='Footer__copy'>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
