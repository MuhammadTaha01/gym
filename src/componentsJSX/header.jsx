import React from 'react'
import '../componentsCSS/header.css'
import Headerimg from '../images/img01.jpg'

const header = () => {
  return (
    <div className='Header-Container'>
            <img className='Background-Img' src={Headerimg} alt="GYM IMAGE" />
        <div className="Text-Container">
            <div className="First-Text">
                <h5>STEP UP YOUR</h5>
            </div>
            <div className="Second-Text">
                <h3><span>FITNESS</span> WITH US</h3>
            </div>
            <div className="Third-Text">
                <h6>BUILD YOUR BODY AND FITNESS WITH PROFESSIONAL TOUCH</h6>
            </div>
            <div className="Join-Btn">
                <button>JOIN NOW</button>
            </div>
        </div>
    </div>
  )
}

export default header