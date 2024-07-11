import React from 'react'
import '../componentsCSS/contact.css'
import CoachImage1 from '../images/coach1.jpeg'
import CoachImage2 from '../images/coach2.jpeg'

const contact = () => {
  return (
    <div className='Contact-Container'>
      
      <hr />

      <div className="Coach1-Data">
          <div className="Coach1-Image-Container">
            <img src={CoachImage1} alt="Coach1 Image" />
            {/* <h5>Owner & Coach</h5> */}
          </div>
          <div className="Contact-Coach1">
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, minus ab vel voluptas atque nostrum obcaecati veniam modi a vero?
              Voluptatibus accusantium tempora, dicta ad quisquam ea maiores iste error consectetur quasi dolorum quis explicabo eos corrupti, nesciunt
              quo molestiae, nostrum illum nam numquam inventore velit. A est consectetur cupiditate.</h4>
            <button>Contact Mr.Riaz</button>
          </div>
      </div>

      <hr />

      <div className="Coach2-Data">
          <div className="Contact-Coach2">
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, minus ab vel voluptas atque nostrum obcaecati veniam modi a vero?
              Voluptatibus accusantium tempora, dicta ad quisquam ea maiores iste error consectetur quasi dolorum quis explicabo eos corrupti, nesciunt
              quo molestiae, nostrum illum nam numquam inventore velit. A est consectetur cupiditate.</h4>
            <button>Contact Mr.Rizwan</button>
          </div>
          <div className="Coach2-Image-Container">
            <img src={CoachImage2} alt="Coach2 Image" />
            {/* <h5>Coach</h5> */}
          </div>
      </div>

      <hr />

    </div>
  )
}

export default contact