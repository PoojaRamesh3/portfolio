import "./Styles/Layout.css";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBriefcase,
  faChartSimple,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";

export default function Layout() {
  const [isActive, setActive] = useState(false);
  const onClickHandler = () => {
    setActive(!isActive);
  };

  const [theme, setTheme] = useState(false);
  const onClickChangeTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <div className="navbtn">
        <button
          className={
            isActive ? "menu-btn position activated" : "menu-btn position"
          }
          onClick={onClickHandler}
        ></button>
        <button
          className={theme ? "menu-btn theme dark" : "menu-btn theme"}
          onClick={onClickChangeTheme}
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
      </div>
      <nav>
        <div className="navbar">
          <ul className={isActive ? "menu-list activated" : "menu-list"}>
            <Link to="/" className="navlist">
              <FontAwesomeIcon icon={faHome} className="navicons" />
              <span className="desc">Home</span>
            </Link>
            <Link to="/about" className="navlist">
              <FontAwesomeIcon icon={faUser} className="navicons" />
              <span className="desc">About</span>
            </Link>
            <Link to="/experience" className="navlist">
              <FontAwesomeIcon icon={faBriefcase} className="navicons" />
              <span className="desc">Experience</span>
            </Link>
            <Link to="/skills" className="navlist">
              <FontAwesomeIcon icon={faChartSimple} className="navicons" />
              <span className="desc">Skills</span>
            </Link>
            <Link to="/contact" className="navlist">
              <FontAwesomeIcon icon={faEnvelope} className="navicons" />
              <span className="desc">Contact</span>
            </Link>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
