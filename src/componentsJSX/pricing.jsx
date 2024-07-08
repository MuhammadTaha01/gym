import React from 'react'
import '../componentsCSS/pricing.css'
import Img1 from '../images/gymIcon.png'
import Img2 from '../images/gymIcon2.png'
import Img3 from '../images/gymIcon3.png'
import Pinimg from '../images/pinImage.png'

const pricing = () => {
  return (
    <div className='Pricing-Container'>
      <div className="Pricing-Text-Container">
        Our Pricing
      </div>
      <div className="Pricing-Boxes">
          <div className="box1">
              <img src={Img1} alt="" />
              <h1>Starter</h1>
              <h3>1000 - PKR</h3>
              <hr className='Hr'/>
              <h5>❌ Access to all gym equipment</h5>
              <h5>✅ Access to cardio machines</h5>
              <h5>❌ Personal trainer sessions</h5>
              <h5>❌ Group fitness classes</h5>
              <h5>✅ Locker room access</h5>
              <h5>✅ Free parking</h5>
              <h5>❌ Swimming pool access</h5>
              <h5>❌ Sauna and steam room access</h5>
              <button>BUY THIS PLAN</button>
          </div>
          <div className="box2">
              <img className='Pin-Image' src={Pinimg} alt="" />
              <img src={Img2} alt="" />
              <h1>Professional</h1>
              <h3>3,500 - PKR</h3>
              <hr className='Hr'/>
              <h5>✅ Access to all gym equipment</h5>
              <h5>✅ Access to cardio machines</h5>
              <h5>✅ Personal trainer sessions (2 per month)</h5>
              <h5>✅ Group fitness classes (limited)</h5>
              <h5>❌ Locker room access</h5>
              <h5>✅ Free parking</h5>
              <h5>✅ Swimming pool access (limited hours)</h5>
              <h5>✅ Sauna and steam room access</h5>
              <button>BUY THIS PLAN</button>
          </div>
          <div className="box3">
              <img src={Img3} alt="" />
              <h1>Enterprise</h1>
              <h3>10,000 - PKR</h3>
              <hr className='Hr'/>
              <h5>✅ Access to all gym equipment</h5>
              <h5>❌ Access to cardio machines</h5>
              <h5>✅ Unlimited personal trainer sessions</h5>
              <h5>✅ Unlimited group fitness classes</h5>
              <h5>❌ Locker room access</h5>
              <h5>✅ Free parking</h5>
              <h5>✅ Swimming pool access (all hours)</h5>
              <h5>❌ Sauna and steam room access</h5>
              <button className='Btn'>BUY THIS PLAN</button>
          </div>
      </div>
    </div>
  )
}

export default pricing