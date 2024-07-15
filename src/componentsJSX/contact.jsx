import React from 'react'
import '../componentsCSS/contact.css'
import CoachImage1 from '../images/coach1.jpeg'
import CoachImage2 from '../images/coach2.jpeg'

const contact = () => {
  
  const handleWhatsappRedrict = (phoneNumber) =>
  {
    window.open(`https://wa.me/${phoneNumber}`,'_blank');
  }

  return (
    <div className='Contact-Container'>
      
      <hr />

      <div className="Coach1-Data">
          <div className="Coach1-Image-Container">
            <img src={CoachImage1} alt="Coach1 Image" />
            <h5>Owner & Coach</h5>
          </div>
          <div className="Contact-Coach1">
            <h4>Riaz, with over 10+ years of personal gym experience and more than 2 years as a certified trainer, serves as both the owner and head 
              coach of the gym. With a deep passion for fitness and extensive expertise in training, Riaz brings a wealth of knowledge to his clients. 
              His commitment to personalized coaching and dedication to helping individuals achieve their fitness goals define his approach at the gym, 
              making him a trusted mentor in the fitness community.</h4>
            <button onClick={()=>handleWhatsappRedrict('03068555015')}>Contact Mr.Riaz</button>
          </div>
      </div>

      <hr />

      <div className="Coach2-Data">
          <div className="Coach2-Image-Container">
            <img src={CoachImage2} alt="Coach2 Image" />
            <h5>Coach</h5>
          </div>
          <div className="Contact-Coach2">
            <h4>Mr. Rizwan, the sole coach at the gym, boasts over 35 years of experience as a dedicated trainer. His focused expertise and commitment to
               fitness training define his coaching style. With a passion for guiding individuals towards their fitness milestones, Mr. Rizwan offers 
               personalized training sessions tailored to meet the unique goals of each client. His hands-on approach and supportive demeanor create a 
               motivating environment where clients can thrive and achieve lasting fitness results.</h4>
            <button onClick={()=>handleWhatsappRedrict('03244296677')}>Contact Mr.Rizwan</button>
          </div>
      </div>

      <hr />

    </div>
  )
}

export default contact