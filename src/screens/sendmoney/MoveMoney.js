import React, { useState, useContext } from "react"
// import Button from "../../components/Button"
import Steps from "../../components/Steps"
import "../../App.css"
import arrow from "../../assets/arrow.png"
// import test from '../assets/test.png'
import keypad from "../../assets/keypad.png"
import { useNavigate } from "react-router-dom"
import Color from "../../components/Color"
import arrow_down from "../../assets/arrow-down.png"
import { AppContext } from "../../App"
import { Fade, Slide } from "react-awesome-reveal"
import { Button } from '@deposits/ui-kit-react'
import CustomizeBar from "../../components/CustomizeBar"

function MoveMoney() {
  const navigate = useNavigate()

  const [toggle, setToggle] = useState(false)
  const toggleButton = () => setToggle(!toggle)
  const { color } = useContext(AppContext)

  return (
    <div className="w-full lg:w-[80%] lg:mx-auto flex lg:justify-center justify-between">
      <div className="mr-[10%]">
        <Fade duration={500}>
          <Slide duration={500}>
            <div className="mt-[80px] mx-16">
              <Steps
                width="200px"
                height="160px"
                borderRadius="8px"
                backgroundColor="#202020"
                text={
                  <div className="pt-5 pl-3 items-start">
                    <p className="font-bold text-left text-lg pl-1">
                      Send Money
                    </p>
                    <p className="text-xs text-left mt-3 pl-1">
                      From your comfort zone send money across the word.
                    </p>

                    {/* <button className="p-1 w-40 mt-4 -ml-5 border-2 border-[#FFFFFF] " onClick={() => {navigate('/send')}}>
                    Next
                  </button> */}
                    <div className="flex space-x-6 mr-3 mt-4">
                      <Button style={{ backgroundColor: "#202020", color: "#FFFFFF" }} className="w-[250px] h-[40px] text-sm bg-[#0DB9E9] text-white " onClick={() => { navigate('/') }}> Back</Button>

                      <Button style={{ backgroundColor: "#202020", color: "#FFFFFF" }} className="w-[250px] h-[40px] text-sm bg-[#0DB9E9] text-white " onClick={() => { navigate("/send-money") }}> Next</Button>
                      {/* <button
                        className="p-1 w-20 mt-4 border-[1px] text-sm border-[#FFFFFF] ml-1"
                        onClick={() => {
                          navigate("/")
                        }}
                      >
                        Back
                      </button>

                      <button
                        className="p-1 w-20 mt-4 border-[1px] text-sm border-[#FFFFFF] "
                        onClick={() => {
                          navigate("/send-money")
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

        <CustomizeBar />

      </div>

      <Fade duration={500} delay={500}>
        <div className="bg-[#ffffff] pt-5 mt-20 -ml-10 mr-[30px] mb-7 h-[530px] w-[270px] relative flex flex-col justify-left items-left rounded-md shadow-2xl">
          <div className="flex space-x-16 pl-5">
            <img src={arrow} className="h-[13px]" alt='' />

            <p className="move">Move Money</p>
          </div>

          <p className="bal" style={{ color: `${color ? color : "#C5C5C5"}` }}>
            Account balance : $6,790
          </p>

          <p
            className="zero"
            style={{ color: `${color ? color : "#E0E0E0"}` }}
            onClick={() => {
              navigate("/send-money")
            }}
          >
            $0
          </p>

          <div className="flex space-x-3 mt-16 mx-1">

            <Button style={{ color: `${color ? color : "#E8E8E8"}` }} className="w-[230px] h-[40px] text-sm bg-[#0DB9E9] text-white " onClick={() => { navigate("/send-money") }}> To Friends</Button>

            <Button style={{ color: `${color ? color : "#E8E8E8"}` }} className="w-[230px] h-[40px] text-sm bg-[#0DB9E9] text-white " onClick={() => { navigate("/send-money") }}> To Bank</Button>

            {/* <Button
              width="230px"
              height="40px"
              text="To Friends"
              color="#FFFFFF"
              fontSize="12px"
              fontWeight="normal"
              borderRadius="8px"
              backgroundColor={color ? color : "#E8E8E8"}
            /> */}

            {/* <Button
              width="230px"
              height="40px"
              text="To Bank"
              color="#FFFFFF"
              fontSize="12px"
              fontWeight="normal"
              borderRadius="8px"
              backgroundColor={color ? color : "#E8E8E8"}
            /> */}
          </div>

          <div className="rounded-md">
            <img src={keypad} alt='' className="h-[195px] w-[270px] rounded-md" style={{ paddingRight: "0px" }} />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default MoveMoney
