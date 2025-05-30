"use client"
import React from 'react'
import "./Footer.scss"
import logo1 from "./../../images/dark/Logo1.png"

import { useTheme } from '../useTheme/UseTheme';
import { siteDb } from '../db'
import FooterAddition from './FooterAddition/FooterAddition';

export default function Footer() {
  const theme = useTheme();

  return (
    <>
      <div className='Footer_Main'>
        <FooterAddition />
        <div className='Footer_Content'>
          <img src={logo1.src} alt="logo" className="Footer_logo_image second" />
          <div className='navbar_second'>
            <ul className="navbar_second_list">
              {siteDb.navbarItems.map((el, id) => (
                <li key={id} className="navbar-item second">{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
