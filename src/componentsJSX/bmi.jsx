import React from 'react'
import '../componentsCSS/bmi.css'

const Bmi = () => {

    const CheckBmi = () => {
        const feet = document.getElementById('feet').value;
        const inches = document.getElementById('inches').value;
        const weight = document.getElementById('weight').value;

        if (!feet || !inches || !weight) {
            alert("Please enter all fields.");
            return;
        }

        const totalInches = (parseFloat(feet) * 12) + parseFloat(inches);
        const heightInMeters = totalInches * 0.0254;
        const weightInKg = parseFloat(weight);

        const bmi = weightInKg / (heightInMeters ** 2);
        document.getElementById('Result').innerText = bmi.toFixed(2);
    }

    return (
        <div className='Bmi-Container'>
            <hr />
            <div className="Bmi-Text">
                <h1>Calculate Your Body-Mass-Index</h1>
            </div>
            <div className="Bmi-Inputs">
                <input placeholder='Enter Your Weight In Kgs' type="text" id="weight" />
                <div className="Bmi-Feet-Inches">
                    <input placeholder='Enter Your Height in Feet' className='Feet' type="text" id="feet" />
                    <input placeholder='Enter Your Height in Inches' className='Inches' type="text" id="inches" />
                </div>
                <button onClick={CheckBmi}>Check BMI</button>
            </div>
            <div className="Bmi-Result">
                <h1>Your Body Mass Index is: <span id='Result'></span></h1>
            </div>
            <hr />
        </div>
    )
}

export default Bmi;
