import React, { useState, useContext } from "react"
import Button from "../../components/Button"
import Steps from "../../components/Steps"
import "../../App.css"
import arrow from "../../assets/arrow.png"
import keypad from "../../assets/keypad.png"
import tool from "../../assets/tool-tip.png"
import { useNavigate } from "react-router-dom"
import Color from "../../components/Color"
import arrow_down from "../../assets/arrow-down.png"
import { AppContext } from "../../App"
import { Bounce, Fade, Slide } from "react-awesome-reveal"

function SendMoney() {
  const [toggle, setToggle] = useState(false)
  const toggleButton = () => setToggle(!toggle)
  const { color } = useContext(AppContext)

  const navigate = useNavigate()

  return (
    <div className="w-full lg:w-[80%] lg:mx-auto flex lg:justify-center justify-between">
      <div className="mr-[10%] lg:ml-[10%]">
        <Fade duration={2000}>
          <Slide duration={2000}>
            <div className="mt-[68px] lg:mr-16 lg:ml-16 ml-5">
              <Steps
                width="200px"
                height="160px"
                borderRadius="8px"
                backgroundColor="#202020"
                text={
                  <div className="pt-5 pl-3 items-center">
                    <p className="font-bold text-left text-lg pl-1">
                      Send Money
                    </p>
                    <p className="text-xs text-left mt-3 pl-1">
                      From your comfort zone send money across the word.
                    </p>

                    {/* <button className="p-1 w-40 mt-4 -ml-5 border-2 border-[#FFFFFF] " onClick={() => {navigate('/send')}}>
                    Next
                  </button> */}

                    <div className="flex space-x-6 mr-3 mt-1">
                      <button
                        className="p-1 w-20 mt-4 border-[1px] text-sm border-[#FFFFFF] ml-1"
                        onClick={() => {
                          navigate("/move-money")
                        }}
                      >
                        Back
                      </button>

                      <button
                        className="p-1 w-20 mt-4 border-[1px] text-sm border-[#FFFFFF] "
                        onClick={() => {
                          navigate("/send")
                        }}
                      >
                        Next
                      </button>
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

        <div className="flex lg:ml-16 ml-5 justify-right items-right absolute bottom-0 mb-2 bg-[#FFFFFF] space-x-3 p-4 w-[350px] ">
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

      <div className="flex lg:mr-0 mr-4 lg:ml-14">
        <Fade duration={1000} delay={500}>
          <div className="bg-[#ffffff] pt-5 mt-10 mb-7 h-[500px] lg:w-[260px] w-[250px] relative flex flex-col justify-right items-right rounded-md">
            <div className="flex space-x-16 pl-5">
              <img src={arrow} className="h-[13px]" />

              <p className="move">Move Money</p>
            </div>

            <p
              className="bal"
              style={{ color: `${color ? color : "#C5C5C5"}` }}
            >
              Account balance : $6,790
            </p>

            <p
              className="amount"
              style={{ color: `${color ? color : "#C5C5C5"}` }}
            >
              $127.34
            </p>

            <div
              className="flex space-x-3 mt-16 mx-1"
              style={{ color: `${color ? color : "#C5C5C5"}` }}
              onClick={() => {
                navigate("/send")
              }}
            >
              <Button
                width="230px"
                height="40px"
                text="To Friends"
                color="#FFFFFF"
                fontSize="12px"
                fontWeight="normal"
                borderRadius="8px"
                backgroundColor={color ? color : "#989898"}
              />

              <Button
                width="230px"
                height="40px"
                text="To Bank"
                color="#FFFFFF"
                fontSize="12px"
                fontWeight="normal"
                borderRadius="8px"
                backgroundColor={color ? color : "#989898"}
              />
            </div>
            <div className="rounded-md">
              <img src={keypad} className="h-[195px] w-[270px] rounded-md" />
            </div>
          </div>
        </Fade>

        <Fade>
          <Bounce delay={500}>
            <div className="hint lg:ml-4 ml-2 pl-10 lg:pr-40 pr-16 mt-[310px] ">
              <Steps
                width="100px"
                height="70px"
                borderRadius="8px"
                // backgroundColor="#202020"
                text={
                  <div className="pt-3 -ml-5 items-start">
                    <p className="try">Try it</p>
                    <p className="click">Click To Friends</p>
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

export default SendMoney
