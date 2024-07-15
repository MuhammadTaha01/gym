import React from 'react'
import '../componentsCSS/about.css'
import Aboutimg from '../images/img2.jpg'

const about = () => {
  let joinChannel = () =>
  {
    window.open("https://chat.whatsapp.com/LqPVost8HWE12HZQqbdBVQ5")
  }
  return (
    <div className='About-Container'>
        <h1>About Us</h1>
        <div className="About-Image-Container">
            <img src={Aboutimg} alt="" />
            <h3>A BIG OFFER</h3>
            <h2>ONLY FOR THIS <span> SUMMER </span> </h2>
            <h5>BUILD YOUR BODY AND FITNESS WITH PROFESSIONAL TOUCH</h5>
              <button onClick={joinChannel}>JOIN NOW</button>
        </div>
    </div>
  )
}

export default about