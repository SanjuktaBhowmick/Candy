import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import logo  from '../../asserts/logo_white.png'
import "./NavBar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <img src={logo} alt="" className="nav__logo-image" />
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `nav__link ${isActive ? "active" : ""}`
                }
                onClick={closeMenuOnMobile}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/publications"
                className={({ isActive }) =>
                  `nav__link ${isActive ? "active" : ""}`
                }
                onClick={closeMenuOnMobile}
              >
                Publications
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/summaries"
                className={({ isActive }) =>
                  `nav__link ${isActive ? "active" : ""}`
                }
                onClick={closeMenuOnMobile}
              >
                Summaries
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/people"
                className={({ isActive }) =>
                  `nav__link ${isActive ? "active" : ""}`
                }
                onClick={closeMenuOnMobile}
              >
                People
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
