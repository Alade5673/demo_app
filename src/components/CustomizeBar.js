import React, { useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import Color from './Color'
import Steps from './Steps'
import arrow_down from "../assets/arrow-down.png"


const CustomizeBar = () => {
  const [toggle, setToggle] = useState(false)
  const toggleButton = () => setToggle(!toggle)
  return (
    <>
      {toggle === true ? (
        <div className="absolute bottom-20 lg:ml-16 ml-5">
          <Steps
            width="300px"
            height="200px"
            borderRadius="8px"
            backgroundColor="#202020"
            text={
              <div className="pt-5 pl-3 items-start">
                <p className="header">CUSTOMIZATIONS AVAILABLE MONEY APP</p>
                <ul className="ul">
                  <li>Logo & Accent colors</li>
                  <li>Icons</li>
                  <li>Buttons</li>
                  <li>Typography</li>
                  <li>Toggles & Tabs</li>
                  <li>Custom fields</li>
                  <li>More…</li>
                </ul>
              </div>
            }
            color="#ffffff"
          ></Steps>
        </div>
      ) : null}

      <div className="flex posi lg:-ml-20 ml-5 justify-right items-right absolute bottom-0 mb-2 bg-[#FFFFFF] space-x-3 p-4 w-[450px] ">
        <Slide>
          <p className="customize">CUSTOMIZE</p>

          <Color />

          <div className="flex space-x-2" onClick={toggleButton}>
            <p className="customize">MORE AVAILABLE</p>

            <img src={arrow_down} className="w-3 h-3" alt='' />
          </div>
        </Slide>
      </div>

    </>
  )
}

export default CustomizeBar