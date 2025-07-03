"use client";
import React from "react";
import { useTheme } from "../useTheme/UseTheme";
import "./SecondSection.scss";

import StarLight from "./../../images/light/DawnLight.png";
import StarDark from "./../../images/dark/DawnDark.png";

export default function SecondSection() {
  const theme = useTheme();
  const starIcon = theme === "light" ? StarLight.src : StarDark.src;

  return (
    <section className="second-section">
      <div className="Rates">
        <div className={`Rates_Items ${theme}`}>
          <div className="Rates_Items_Content">
            <div className="Content content-1">
              <h2 className={`Content_h2 ${theme}`}>90%</h2>
              <h3 className={`Content_h3 ${theme}`}>
                Job Success Score on Upwork
              </h3>
            </div>

            <div className={`star ${theme}`}>
              <img src={starIcon} alt="Upwork job success star icon" />
            </div>

            <div className="Content content-2">
              <h2 className={`Content_h2 ${theme}`}>&gt;25.00</h2>
              <h3 className={`Content_h3 ${theme}`}>
                Duplicates on Figma Community
              </h3>
            </div>

            <div className={`star ${theme}`}>
              <img src={starIcon} alt="Figma duplicates star icon" />
            </div>

            <div className="Content content-3">
              <h2 className={`Content_h2 ${theme}`}>&gt;2k</h2>
              <h3 className={`Content_h3 ${theme}`}>In Finished Works</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
