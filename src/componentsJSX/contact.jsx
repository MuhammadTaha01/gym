import React from 'react'
import Send from '../images/sendIcon.png'
import Image from '../images/img1.jpg'
import WhatsappImage from '../images/whatsappImg.png'
import '../componentsCSS/contact.css'

const contact = () => {

  let handleSumbit = (event) =>
  {
    event.preventDefault();
  }

  let handleWhatsappClick = () =>
  {
    const phoneNumber = '03018171334';
    const message = 'Hello i would like to get in touch with you';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL,'_blank')
  }

  return (
    <div className='Contact-Container'>
      <h1>Contact Us</h1>
      <div className="Form-Image-Container">
          <div className="Form-Container">
              <form action="" onSubmit={handleSumbit}>
                  <input type="text" name="" id="" placeholder='Enter Your Name ' required/>
                  <input type="email" name="" id="" placeholder='Enter Your Email' required/>
                  <input type="tel" name="" id="" placeholder='Enter Your Phone-No' required/>
                  <h5>Enter Joining Date:</h5>
                  <input type="date" name="" id="" required/>
                  <textarea name="message" id="" placeholder='Enter Your Message...'/>
                  <button className='Msg-Btn'>SEND MESSAGE <span><img src={Send} alt="" className='Form-Image'/></span></button>
                  <div className="Whatsapp-Btn">
                    <button onClick={handleWhatsappClick}>WHATSAPP <span><img src={WhatsappImage} alt="" className='Form-Image'/></span></button>
                  </div>
              </form>
          </div>
          <div className="Contact-Image-Container">
              <img src={Image} alt="" />
          </div>
      </div>
    </div>
  )
}

export default contact