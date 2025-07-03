import React from 'react'
import "./FooterAddition.scss"
import img from "./../../../images/7a86dd7133061f7945b65fa8d260bea3e1ae2d01.png"
export default function FooterAddition() {
  return (
    <div className='FooterAddition_Main'>
      <div className="FooterAddition_Content">
        <img src={img.src} alt="" className='FooterAddition_Img' />
        <h3 className='FooterAddition_h3'>Thanks for visit my website
          If you have any questions you can write me to any of my social networks, I am sure I will answer you.</h3>
      </div>
    </div>
  )
}
