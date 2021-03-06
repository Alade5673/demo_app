import React from "react"
// import Button from "../../components/Button"
import Steps from "../../components/Steps"
import "../../App.css"
// import arrow from "../../assets/arrow.png"
// import keypad from "../../assets/keypad.png"
import sendNext from "../../assets/sendNext.png"
// import InputField from "../../components/InputField"
import { useNavigate } from "react-router-dom"
// import Color from "../../components/Color"
// import arrow_down from "../../assets/arrow-down.png"
import { Fade, Slide } from "react-awesome-reveal"
import { Button } from '@deposits/ui-kit-react'
import CustomizeBar from "../../components/CustomizeBar"

function SendNext() {
  // const [toggle, setToggle] = useState(false)
  // const toggleButton = () => setToggle(!toggle)

  const navigate = useNavigate()
  return (
    <div className="w-full flex lg:w-[80%] lg:mx-auto lg:justify-center justify-between">
      <div className="flex justify-left mr-[10%]">
        <Fade duration={500}>
          <Slide duration={500}>
            <div className="mt-[80px] lg:mr-16 lg:ml-16 ml-5">
              <Steps
                width="260px"
                height="220px"
                borderRadius="8px"
                backgroundColor="#202020"
                text={
                  <div className="pt-5 pl-3 items-start">
                    <p className="font-bold text-left text-md pl-1">
                      Choose from saved recipient and add a note
                    </p>
                    <p className="text-xs text-left mt-3 pl-1">
                      We provide you with easy access to customize your app
                      theme to suit your taste.
                    </p>

                    <div className="flex space-x-6 mr-3 mt-6">

                      <Button style={{ backgroundColor: "#202020", color: "#FFFFFF" }} className="w-[250px] h-[40px] text-sm bg-[#0DB9E9] text-white " onClick={() => { navigate('/send') }}> Back</Button>

                      <Button style={{ backgroundColor: "#202020", color: "#FFFFFF" }} className="w-[250px] h-[40px] text-sm bg-[#0DB9E9] text-white " onClick={() => { navigate("/success") }}> Next</Button>
                      {/* <button
                        className="p-1 w-20 mt-4 border-[1px] border-[#FFFFFF] ml-1 text-sm"
                        onClick={() => {
                          navigate("/send")
                        }}
                      >
                        Back
                      </button>

                      <button
                        className="p-1 w-20 mt-4 border-[1px] border-[#FFFFFF] text-sm"
                        onClick={() => {
                          navigate("/success")
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
        <div className="w-[280px] h-[530px] mt-20 mb-7 rounded-md lg:mr-0 mr-8 -ml-28">
          <img
            alt=''
            src={sendNext}
            className="rounded-md"
            style={{ width: "100%", height: "100%" }}
          />

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
        </div>
      </Fade>
    </div>
  )
}

export default SendNext
