"use client";
import React from "react";
import "./Main.scss";
import { siteDb } from "../db";
import { useTheme } from "../useTheme/UseTheme";
import dowLogo from "./../../images/arrow-down.png";
import starIcoDark from "./../../images/dark/PortalLight.png";
import starIcoLight from "./../../images/light/Portal.png";
import imgHero from "./../../images/colorful-vintage-collage-design 1.png";

export default function Main() {
  const theme = useTheme();
  const chooseLogo = theme === "light" ? siteDb.socialLogosLight : siteDb.socialLogosDark;
  const starIco = theme === "light" ? starIcoLight.src : starIcoDark.src;

  return (
    <section className="hero">
      <div className="fill_hero">
        <div className="hero_main_items">
          <div className="hero_text">
            PRODUCT DESIGNER <mark className="hero_text_pin">CRISTIAN MUÑOZ</mark>
          </div>

          <div className="hero_socialsAndDownload">
            <div className="hero_socials">
              {chooseLogo.map((el, index) => (
                <div className="socialBox" key={index}>
                  <img src={el.src} alt={`Social icon ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="hero_download">
              <h4 className="hero_download_h4">Download Curriculum Vitae</h4>
              <div className="hero_download_imgBox">
                <img src={dowLogo.src} alt="Download icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="starIco">
          <img src={starIco} alt="Star icon" />
        </div>
      </div>
      <div className="bigImage">
        <img src={imgHero.src} alt="Hero collage" className="hero_img" />
      </div>
    </section>
  );
}
