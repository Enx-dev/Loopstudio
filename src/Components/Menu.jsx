import React from "react";
import { createPortal } from "react-dom";
import brandLogo from "../images/logo.svg";
import closeIcon from "../images/icon-close.svg";
const Menu = ({ setOpenMenu }) => {
  return createPortal(
    <section id='Menu' className='MenuSection'>
      <div className='MenuSection__top'>
        <img src={brandLogo} alt='brand Logo' />
        <img onClick={() => setOpenMenu(false)} src={closeIcon} alt='close' />
      </div>
      <ul className='MenuSection__links'>
        <li id='Menu__links'>About</li>
        <li id='Menu__links'>Careers</li>
        <li id='Menu__links'>Events</li>
        <li id='Menu__links'>Products</li>
        <li id='Menu__links'>Support</li>
      </ul>
    </section>,
    document.getElementById("root")
  );
};
export default Menu;
