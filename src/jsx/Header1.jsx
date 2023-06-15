import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import LogoImage from "../images/Emblem_of_Nepal.png";
import NepalFlag from "../images/WavingFlag.gif";
import "../App.css";

const Header1 = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    window.history.pushState(null, null, "/");
    navigate("/");
  };

  return (
    <>
      <header className="header_main1">
        <div className="logo_div1">
          <img src={LogoImage} alt="Government of Nepal" className="logo_image1" />
        </div>
        <nav>
          <ul className="nav_main1">
            <li><NavLink exact to="/dashboard" activeClassName="active-link1">Dashboard</NavLink></li>
            <li><NavLink to="/complainlist" activeClassName="active-link1">Complain List</NavLink></li>
            <li><NavLink to="/dashboard" activeClassName="active-link1">Approved</NavLink></li>
          </ul>
        </nav>
        <div className="flag_div1">
          <button onClick={logoutHandler}>Logout</button>
          <img src={NepalFlag} alt="Nepal Flag" className="nepal_flag_image1" />
        </div>
      </header>
      <div className="small_div1"></div>
    </>
  );
};

export default Header1;
