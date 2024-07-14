import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import '../componentsCSS/counter.css'

const counter = () => {
    let [counterOn, setCounterOn] = useState(false)

    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div className='Counter-Container'>
                <hr />
                {/* <div className="Counter-Text">
                    <h1> Happy Clients </h1>
                </div> */}
                <div className="Counter-Data-Container">
                    <div className="Counter1">
                        <h1> {counterOn && <CountUp start={6} end={1000} duration={5}/>} + </h1>
                        <h3> Happy Customers</h3>
                    </div>

                    <hr className='Hr-2'/>

                    <div className="Counter2">
                        <h1> {counterOn && <CountUp start={0} end={20} duration={10}/>} + </h1>
                        <h3>Years Of Experience</h3>
                    </div>

                    <hr className='Hr-3'/>

                    <div className="Counter3">
                        <h1> {counterOn && <CountUp start={13} end={90} duration={5}/>} : {counterOn && <CountUp start={0} end={40} duration={5}/>} </h1>
                        <h3>Ratio Of Males & Females in gym</h3>
                    </div>
                </div>
                
                <hr />
            </div>
        </ScrollTrigger>
  )
}

export default counter