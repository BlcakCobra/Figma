"use client";
import React, { useCallback, useState } from "react";
import "./NavBar.scss";

import logo from "./../../images/light/Logo.png";
import logo1 from "./../../images/dark/Logo1.png";

import { siteDb } from "../db";
import SwitchButton from "./SwitchButton/SwitchButton";
import { useTheme } from "../useTheme/UseTheme";
import Burger from "../Burger/Burger";

export default function NavBar() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const getLogo = () => (theme === "dark" ? logo1.src : logo.src);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <img src={getLogo()} alt="Site logo" className="logo_image" />

      <nav className={`nav_item ${isOpen ? "open" : ""}`}>
        <ul className="navbar-list">
          {siteDb.navbarItems.map((el, id) => (
            <li key={id} className="navbar-item">
              {el}
            </li>
          ))}
        </ul>
      </nav>

      <div className={`lightAndcontact ${isOpen ? "open" : ""}`}>
        <SwitchButton />
        <div className={`contactMe ${theme}`}>Contact Me</div>
      </div>

      <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
