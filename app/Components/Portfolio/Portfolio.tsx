"use client"
import React from 'react'
import "./Portfolio.scss"
import { siteDb } from '../db'
import { useTheme } from '../useTheme/UseTheme'
export default function Portfolio() {
  const theme = useTheme()
  return (
    <div className='Portfolio_Main'>
      <h1>PORTFOLIO</h1>
      <div className='Portfolio_item_colum'>
        <div className="Portfolio_item_row">
          {siteDb.portfolioContent.map((el,index) =>{
            return <div className='portfolio_Content' key={index}>
              <img src={el.src} alt="Portfolio_img" className='Portfolio_img' />
                <div className='Portfolio_miniContent'>
                  <h2 className='Portfolio_miniContent_h2'>Mi portal U</h2>
                  <div className='Portfolio_miniContent_atributes'>
                    <div className='Portfolio_miniContent_atribute'>UX Design</div>
                    <div className='Portfolio_miniContent_atribute'>University</div>
                    <div className='Portfolio_miniContent_atribute'>JavaScript</div>
                    
                  </div>
                </div>
                <div className='Portfolio_Button'>Figma Community</div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
