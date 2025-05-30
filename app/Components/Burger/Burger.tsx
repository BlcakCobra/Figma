import React from 'react'
import  "./Burger.scss"
import { useTheme } from '../useTheme/UseTheme'

interface BurgerType {
    isOpen:boolean,
    toggleMenu: () => void
  }

const Burger: React.FC<BurgerType> = ({isOpen,toggleMenu}) => {
  let theme = useTheme()
  return (
   <>
    <div className={`burger ${isOpen ? "open" : "" }`}  onClick={toggleMenu}>
        <div className={`line ${theme === "light" ? "light":"dark"}`}></div>
        <div className={`line ${theme === "light" ? "light":"dark"}` }></div>
        <div className={`line ${theme === "light" ? "light":"dark"}`}></div>
    </div>
   {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
   </>
  )
}

export default Burger