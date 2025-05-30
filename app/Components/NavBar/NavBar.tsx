"use client"
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

  const getLogo = () => {
    return theme === "dark" ? logo1.src : logo.src;
  };
    const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
   <div className="navbar">
  <img src={getLogo()} alt="logo" className="logo_image" />

  <nav className={`nav_item ${isOpen ? "open" : ""}`}>
    {siteDb.navbarItems.map((el, id) => (
      <li key={id} className="navbar-item">{el}</li>
    ))}
  </nav>

  <div className="lightAndcontact">
    <SwitchButton />
    <div className={`contactMe ${theme}`}>Contact Me</div>
  </div>

  <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
</div>
  );
}
