import React from "react";
import { NavLink } from 'react-router-dom';
import LogoImage from "../images/Emblem_of_Nepal.png";
import NepalFlag from "../images/WavingFlag.gif";

const Header = () => {
  return (
    <>
      <header className="header_main">
        <div className="logo_div">
          <img src={LogoImage} alt="Government of Nepal" className="logo_image" />
        </div>
        <nav>
          <ul className="nav_main">
            <li><NavLink exact="true" to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/complain" activeClassName="active">Complain</NavLink></li>
            <li><NavLink to="/status" activeClassName="active">Status</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          </ul>
        </nav>
        <div className="flag_div">
        <NavLink to="/login" activeClassName="active">Admin</NavLink>
          <img src={NepalFlag} alt="Nepal Flag" className="nepal_flag_image" />
        </div>
      </header>
      <div className="small_div"></div>
    </>
  );
};

export default Header;
