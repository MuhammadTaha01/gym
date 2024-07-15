import React from 'react'
import '../componentsCSS/footer.css'
import instagram from '../images/instalogo.png'
import whatsapp from '../images/whatsappImg.png'

const footer = () => {
  const handleWhatsappRedrict = (phoneNumber) =>
    {
      window.open(`https://wa.me/${phoneNumber}`,'_blank');
    }

  return (
    <div className='Footer-Container'>
        <hr />

        <div className="Social-And-Rights-Container">
            <div className="Social-Media-Container">
              <h5>Also Do Follow Us On</h5>
              <a href="https://www.instagram.com/gravitygym2024/?locale=en_AE%2B2&hl=am-et">
                <img className='instaImg' src={instagram} alt="Instagram" />
              </a>
                <img className='whatsappImg' src={whatsapp} alt="Whatsapp" onClick={()=>handleWhatsappRedrict('03068555015')}/>
            </div>
            <div className="Rights-Container">
              <h4>&copy; ALL RIGHTS RESERVED BY <span>@GRAVITY-GYM 2024</span> </h4>
              <h4> 📍 283-F BLOCK, JOHAR TOWN, LAHORE</h4>
            </div>

        </div>

    </div>
  )
}

export default footer