import "./Styles/Layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBriefcase,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";

export default function Layout() {
  const [isActive, setActive] = useState(false);
  const onClickHandler = () => {
    setActive(!isActive);
  };

  // const [isEnabled, setEnabled] = useState(false);
  // const onLinkClickHandler = () => {
  //   setEnabled(!isEnabled);
  // };
  return (
    <>
      <button
        className={isActive ? "menu-btn activated" : "menu-btn"}
        onClick={onClickHandler}
      ></button>
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
