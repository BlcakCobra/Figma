"use client";
import React from "react";
import "./AboutMe.scss";
import one from "./../../images/1.png";
import Two from "./../../images/2.png";
import Three from "./../../images/3.png";
import zigLight from "./../../images/light/Zig ZagLight.png";
import zigDark from "./../../images/light/Zig ZagLight.png";

import { useTheme } from "../useTheme/UseTheme";

const descriptionText =
  "I am a Product Designer and Frontend Developer, I fully understand the process of design and development of a digital product, my job is to make a product usable and visually appealing. Through the Design Thinking methodology I manage to create products that are endearing to users.";

export default function AboutMe() {
  const theme = useTheme();

  return (
    <div className="AboutMe_Main">
      <div className="AboutMe_colum">
        <div className="AboutMe_row">
          <div className="text_block">
            <div className="AboutMe_h1_img">
              <h1 className="AboutMe_h1">ABOUT ME</h1>
              <img
                src={theme === "light" ? zigLight.src : zigDark.src}
                className="zigzag"
                alt="Decorative zigzag line"
              />
            </div>
            <p className="text_block_p">{descriptionText}</p>
          </div>
          <img src={one.src} alt="About me image 1" className="AboutMe_img" />
        </div>

        <div className="AboutMe_row second">
          <img src={Two.src} alt="About me image 2" className="AboutMe_img second" />
          <div className="text_block second">
            <p className="text_block_p">{descriptionText}</p>
          </div>
        </div>

        <div className="AboutMe_row">
          <div className="text_block">
            <p className="text_block_p">{descriptionText}</p>
          </div>
          <img src={Three.src} alt="About me image 3" className="AboutMe_img third" />
        </div>
      </div>
    </div>
  );
}
