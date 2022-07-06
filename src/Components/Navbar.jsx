import React, { useState } from "react";
import brandLogo from "../images/logo.svg";
import menuIcon from "../images/icon-hamburger.svg";
import Menu from "./Menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav id='Navbar' className='Navbar'>
      <img className='Navbar__logo' src={brandLogo} alt='Brand Logo' />
      <ul className='Navbar__links'>
        <li>About </li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
      <img
        onClick={() => setOpenMenu(true)}
        className='Navbar__menu'
        src={menuIcon}
        alt=''
      />
      {openMenu && <Menu setOpenMenu={setOpenMenu} />}
    </nav>
  );
};

export default Navbar;
