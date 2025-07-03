import React from 'react'
import "./Burger.scss"
import { useTheme } from '../useTheme/UseTheme'

type BurgerType = {
  isOpen: boolean
  toggleMenu: () => void
}

const Burger = ({ isOpen, toggleMenu }: BurgerType) => {
  let theme = useTheme()

  return (
    <>
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className={`line ${theme === "light" ? "light" : "dark"}`} />
        <div className={`line ${theme === "light" ? "light" : "dark"}`} />
        <div className={`line ${theme === "light" ? "light" : "dark"}`} />
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  )
}

export default Burger