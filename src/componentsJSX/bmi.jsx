import React from 'react'
import '../componentsCSS/bmi.css'

const bmi = () => {
  return (
    <div className='Bmi-Container'>

        <hr />

        <div className="Bmi-Text">
            <h1>Calculate Your Body-Mass-Index</h1>
        </div>
        <div className="Bmi-Inputs">
            <input placeholder='Enter Your Weight' type="text" name="" id="" />
            <div className="Bmi-Feet-Inches">
                <input placeholder='Enter Your Height in Feets' className='Feet' type="text" name="" id="" />
                <input placeholder='Enter Your Height in inches' className='Inches' type="text" name="" id="" />
            </div>
            <button>Check BMI</button>
        </div>
        <div className="Bmi-Result">
            <h1>Your Body Mass Index is: </h1>
        </div>
        <hr />
    </div>
  )
}

export default bmi