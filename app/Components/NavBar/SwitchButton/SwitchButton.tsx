"use client"
import React, { useEffect, useState } from 'react'
import "./SwitchButton.scss"

export default function () {
    const [isDarkMode,setIsDarkMode] = useState(false)
    
      useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  return (
    <div className="theme-toggle" onClick={() => setIsDarkMode(prev => !prev)}>
      <div className={`toggle-thumb ${isDarkMode ? "dark" : "light"}`}></div>
    </div>
  )
}
