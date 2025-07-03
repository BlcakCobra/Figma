"use client";
import React from "react";
import "./Skills.scss";
import { siteDb } from "../db";
import { useTheme } from "../useTheme/UseTheme";

export default function Skills() {
  const theme = useTheme();

  const data = theme === "light" ? siteDb.GraphLight : siteDb.GraphDark;

  return (
    <div className="Skills_Main">
      <h1>SKILLS</h1>
      <div className="Skills_Content_colum">
        <div className="Skills_Content_row">
          {data.map((el, index) => (
            <div className="Skills_Content" key={index}>
              <img
                src={el.img.src}
                alt={`Skill icon: ${el.name}`}
                className="Skills_Content_img"
              />
              <div className="Skills_Content_Texts">
                <h1 className="Skills_Content_Texts_h1">{el.name}</h1>
                <h4 className="Skills_Content_Texts_h4">{el.description}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
