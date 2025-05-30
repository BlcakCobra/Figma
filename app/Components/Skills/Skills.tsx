"use client"
import React from 'react'
import "./Skills.scss"
import { siteDb } from '../db'
import { useTheme } from '../useTheme/UseTheme'

export default function Skills() {
    let theme = useTheme()
  return (
    <div className='Skills_Main'>
        <h1 className=''>SKILLS</h1>
        <div className='Skills_Content_colum'>
            <div className='Skills_Content_row'>
                {theme === "light" ? siteDb.GraphLight.map((el,index) =>{
                    return (
                        <div className='Skills_Content' key={index}>
                            <img src={el.img.src} alt="Skills_Content_img" className='Skills_Content_img'/>
                            <div className='Skills_Content_Texts'>
                                <h1 className='Skills_Content_Texts_h1'>{el.name}</h1>
                                <h4 className='Skills_Content_Texts_h4'>{el.description}</h4>
                            </div>
                        </div>
                    )
                }):siteDb.GraphDark.map((el,index) =>{
                    return (
                        <div className='Skills_Content' key={index}>
                            <img src={el.img.src} alt="Skills_Content_img" className='Skills_Content_img'/>
                            <div className='Skills_Content_Texts'>
                                <h1 className='Skills_Content_Texts_h1'>{el.name}</h1>
                                <h4 className='Skills_Content_Texts_h4'>{el.description}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
