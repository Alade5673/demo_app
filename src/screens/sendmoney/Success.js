import React from "react"
// import Button from "../../components/Button"
import Steps from "../../components/Steps"
import "../../App.css"
// import arrow from "../../assets/arrow.png"
// import keypad from "../../assets/keypad.png"
import snt from "../../assets/snt.png"
// import InputField from "../../components/InputField"
import { useNavigate } from "react-router-dom"
// import Color from "../../components/Color"
// import arrow_down from "../../assets/arrow-down.png"
import { Fade, Slide } from "react-awesome-reveal"
import { Button } from '@deposits/ui-kit-react'
import CustomizeBar from "../../components/CustomizeBar"

function Success() {
  // const [toggle, setToggle] = useState(false)
  // const toggleButton = () => setToggle(!toggle)

  const navigate = useNavigate()
  return (
    <div className="w-full lg:w-[80%] lg:mx-auto flex lg:justify-center justify-between">
      <div className="flex justify-left mr-[10%]">
        <Fade duration={500}>
          <Slide duration={500}>
            <div className="mt-[80px] lg:mr-lg:16 lg:ml-12 ml-5">
              <Steps
                width="240px"
                height="180px"
                borderRadius="8px"
                backgroundColor="#202020"
                text={
                  <div className="pt-5 pl-3 items-start">
                    <p className="font-bold text-left text-md pl-1 mr-5">
                      Payment Successful
                    </p>
                    <p className="text-xs text-left mt-3 pl-1 pr-10">
                      With Money App your money is sent before you blink and
                      smile.
                    </p>

                    <div className="flex space-x-4 mr-3 mt-8">

                      <Button style={{ backgroundColor: "#202020", color: "#FFFFFF" }} className="w-[250px] h-[40px] text-sm bg-[#0DB9E9] text-white " onClick={() => { navigate('/send-next') }}> Back</Button>

                      <Button style={{ backgroundColor: "#202020", color: "#FFFFFF" }} className="w-[250px] h-[40px] text-sm bg-[#0DB9E9] text-white " onClick={() => { navigate("/") }}> Finish Demo</Button>
                      {/* <button
                        className="p-1 w-16 mt-4 border-[1px] text-sm border-[#FFFFFF] ml-1"
                        onClick={() => {
                          navigate("/send-next")
                        }}
                      >
                        Back
                      </button>

                      <button
                        className="p-1 w-28 mt-4 border-[1px] text-sm border-[#FFFFFF] "
                        onClick={() => {
                          navigate("/")
                        }}
                      >
                        Finish Demo
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
        <div className="lg:w-[280px] w-[250px] h-[530px] mt-20 mb-7 rounded-md lg:mr-0 mr-5">
          <img
            alt=''
            src={snt}
            className="rounded-md"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </Fade>
    </div>
  )
}

export default Success
