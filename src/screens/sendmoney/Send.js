import React, { useState } from "react"
// import Button from "../../components/Button"
import Steps from "../../components/Steps"
import "../../App.css"
import arrow from "../../assets/arrow.png"
import keypad from "../../assets/keypad.png"
import addValue from "../../assets/addValue.png"
import InputField from "../../components/InputField"
import { useNavigate } from "react-router-dom"
import Color from "../../components/Color"
import arrow_down from "../../assets/arrow-down.png"
import { Fade, Slide, Bounce } from "react-awesome-reveal"
import { Button } from '@deposits/ui-kit-react'

function Send() {
  const [toggle, setToggle] = useState(false)
  const toggleButton = () => setToggle(!toggle)

  const navigate = useNavigate()

  return (
    <div className="w-full lg:w-[80%] lg:mx-auto flex lg:justify-center justify-between">
      <div className="flex justify-left mr-[10%] lg:ml-[20%]">
        <Fade duration={500}>
          <Slide duration={500}>
            <div className="mt-[80px] lg:mr-16 lg:ml-16 ml-5">
              <Steps
                width="220px"
                height="220px"
                borderRadius="8px"
                backgroundColor="#202020"
                text={
                  <div className="pt-5 pl-3 items-start">
                    <p className="font-bold text-left text-md pl-1">
                      Choose from saved recipient and add a note
                    </p>
                    <p className="text-xs text-left mt-3 pl-1">
                      With saved beneficiaries, you do not have to input friends
                      bank detail consistently.
                    </p>

                    <div className="flex space-x-6 mr-3 mt-2">

                      <Button style={{backgroundColor: "#202020", color: "#FFFFFF"}} className="w-[250px] h-[40px] text-sm bg-[#0DB9E9] text-white " onClick={() => {navigate('/send-money')}}> Back</Button>

                      <Button style={{backgroundColor: "#202020", color: "#FFFFFF"}} className="w-[250px] h-[40px] text-sm bg-[#0DB9E9] text-white " onClick={() => {navigate("/send-next")}}> Next</Button>
                      {/* <button
                        className="p-1 w-20 mt-4 border-[1px] border-[#FFFFFF] text-sm"
                        onClick={() => {
                          navigate("/send-money")
                        }}
                      >
                        Back
                      </button>

                      <button
                        className="p-1 w-20 mt-4 border-[1px] border-[#FFFFFF] text-sm"
                        onClick={() => {
                          navigate("/send-next")
                        }}
                      >
                        Next
                      </button> */}
                    </div>
                  </div>
                }
                color="#ffffff"
              ></Steps>
            </div>
          </Slide>
        </Fade>

        {toggle == true ? (
          <div className="absolute bottom-20 lg:ml-16 ml-5">
            <Steps
              width="300px"
              height="200px"
              borderRadius="8px"
              backgroundColor="#202020"
              text={
                <div className="pt-5 pl-3 items-start">
                  <p className="header">CUSTOMIZATIONS AVAIABLE MONEY APP</p>
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

        <div className="flex lg:ml-16 ml-5 absolute bottom-0 mb-2 bg-[#FFFFFF] space-x-3 p-4 w-[450px] ">
          <Slide>
            <p className="customize">CUSTOMIZE</p>

            <Color />

            <div className="flex space-x-2" onClick={toggleButton}>
              <p className="customize">MORE AVAILABLE</p>

              <img src={arrow_down} className="w-3 h-3" />
            </div>
          </Slide>
        </div>
      </div>

      <div className="flex rounded-md lg:mr-0 mr-2 lg:ml-14">
        <Fade duration={500} delay={500}>
          <div className="lg:w-[280px] w-[250px] h-[530px] mt-20 mb-7 -ml-28">
            <img
              src={addValue}
              className="w-full h-full rounded-md"
              onClick={() => {
                navigate("/send-next")
              }}
            />
          </div>
        </Fade>
        {/* <div className="bg-[#ffffff] p-10 mt-20">
              <div className="flex space-x-20">
                <img src={arrow} className="w-3 h-3"/>

                <p className="move">
                    Send $127.34
                  </p>
              </div>

              <InputField
                type="text"
                className="form-control"
                placeholder="To Recipient name or Email"
                // onChange={onChange}
              />

              <p className="bal">
                  Account balance : $6,790
              </p>

              <p className="amount">
                  $127.34
              </p>

              <div className="flex space-x-6 ml-36 mt-32">
                  <Button
                    width="120px"
                    height="40px"
                    text="To Friends"
                    color="#000000"
                    fontSize='12px'
                    fontWeight="normal"
                    borderRadius="8px"
                    backgroundColor={"#989898"}

                />

                <Button
                    width="120px"
                    height="40px"
                    text="To Bank"
                    color="#000000"
                    fontSize='12px'
                    fontWeight="normal"
                    borderRadius="8px"
                    backgroundColor={"#989898"}

                />
              </div>
               <img src={keypad}/>

           </div> */}
        <Fade>
          <Bounce delay={500}>
            <div className="hint lg:ml-4 ml-2 pl-10 lg:pr-40 pr-20 mt-[100px]">
              <Steps
                width="120px"
                height="70px"
                borderRadius="8px"
                //   backgroundColor="#202020"
                text={
                  <div className="pt-3 pl-3 -ml-8 items-start">
                    <p className="try">Try it</p>
                    <p className="click">Click the input fields</p>
                  </div>
                }
                color="#ffffff"
              ></Steps>
            </div>
          </Bounce>
        </Fade>
      </div>
    </div>
  )
}

export default Send
