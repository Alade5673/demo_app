import React, { useEffect, useState } from "react"
import "../App.css"
// import Button from "../components/Button"
import test from "../assets/empty.png"
// import colored_radio from "../assets/colored_radio.png"
// import uncolored_radio from "../assets/uncolored_radio.png"
// import Option from "../components/Option"
import { useNavigate, useLocation } from "react-router-dom"
// import Steps from "../components/Steps"
import { Fade, Slide } from "react-awesome-reveal"
import { Button } from '@deposits/ui-kit-react'
import Radio from "@deposits/ui-kit-react/dist/components/radio"

function Home({ setVisibility }) {

  let location = useLocation()

  const navigate = useNavigate()
  useEffect(() => {
    setVisibility("hidden")

    return () => {
      setVisibility("fixed")
    }
  }, [location, setVisibility])

  const [toggle, setToggle] = useState(true)
  const toggleButton = () => setToggle(!toggle)

  // const [option, setOption] = useState("Send Money")

  // const noop = () => {
  //   navigate("/send-money")
  // }

  return (
    <div className="bg-[rgba(115, 121, 127, 0.6)] backdrop-blur-md">
      <div className="w-full flex justify-between lg:justify-center pt-[55px] items-start">
        <Slide duration={500}>
          <Fade duration={500}>
            <div className="flex flex-col justify-center items-center text-center py-10 rounded-lg bg-white ml-[20px] mr-[60px] lg:ml-[auto] shadow-lg w-[400px] h-[500px] lg:w-[480px] lg:h-[580px]">
              <p className="text-xl lg:text-3xl font-bold">
                Get Started with Money App
              </p>

              <p className="text-xs lg:text-sm font-normal mx-12 mt-5">
                Take a tour and see how we have made various financials
                activities smooth and faster.
              </p>

              <hr
                className="mt-8"
                style={{
                  color: "#000000",
                  backgroundColor: "#000000",
                  height: 2,
                  width: 60,
                }}
              />

              <p className="text-sm font-normal mt-5 text-left">
                View demo as an:
              </p>

              {/* <div
            className="radio-btn border-2 border-[#E5E5E5]"
            onClick={() => {
              setOption("Send Money");
            }}
          >
          <input
            type="radio"
            value={option}
            name="option"
            checked={option == "Send Money"}
          />
          Send Money
        </div>

        <div
          className="radio-btn2 "
          onClick={() => {
            setOption("Top Up");
          }}
        >
          <input
            className="bg-[#0DB9E9]"
            type="radio"
            value={option}
            name="option"
            checked={option == "Top Up"}
          />
          Top Up
        </div> */}

              <div className="flex mt-10 place-items-center">

                {/* <div className={[toggle ? "border border-sky-500" : "border-2 border-[#E5E5E5]"]} onClick={toggleButton} > */}
                <div
                  className="border border-[#43D2FA] items-center"
                  onClick={toggleButton}
                >

                  <Radio label="Account Holder" className="p-10" defaultChecked style={{ color: toggle ? "#0DB9E9" : "#000000" }} />
                  {/* <Option
                    width="170px"
                    height="80px"
                    text="Account Holder"
                    color="#0DB9E9"
                    // color={toggle ? "#0DB9E9" : "#000000"}
                    fontSize="18px"
                    fontWeight="normal"
                    img={
                      <img className="w-5 h-5 mt-[2px]" src={colored_radio} />
                    }
                    // img={toggle ? <img className="w-5 h-5" src={colored_radio} /> : <img className="w-5 h-5" src={uncolored_radio} />}
                    onClick={noop}
                  /> */}
                </div>
                {/* <div className="mr-3"/>

        <div className={[toggle ? "border-2 border-[#E5E5E5]" : "border-2 border-[#0DB9E9]"]} onClick={toggleButton} >
            <Option
              width="200px"
              height="100px"
              text="Top Up"
              color={toggle ? "#000000" :"#0DB9E9"}
              fontSize='18px'
              fontWeight="bold"
              img={toggle ? <img className="w-5 h-5" src={uncolored_radio} /> : <img className="w-5 h-5" src={colored_radio} />}
              onClick={() => {
              setOption("Top Up");
            }}

            
            />
          </div> */}
              </div>

              {/* <div onClick={() => {toggle == true ? navigate('/move-money'): navigate('/top-up')}} className="pl-5"> */}
              <div
                onClick={() => navigate("/move-money")}
                className="mt-10 mx-auto"
              >
                <Button style={{ backgroundColor: "#0DB9E9", color: "#FFFFFF" }} className="w-[280px] h-[50px] text-sm bg-[#43D2FA] text-white ">Launch Demo</Button>
                {/* <Button
                  width="280px"
                  height="50px"
                  text="Launch Demo"
                  color="#FFFFFF"
                  fontSize="18px"
                  fontWeight="normal"
                  borderRadius="8px"
                  backgroundColor={"#0DB9E9"}
                /> */}
              </div>
            </div>
          </Fade>
        </Slide>

        <Fade delay={600} duration={2000}>
          <div className="w-[270px] h-[500px] lg:w-[300px] lg:h-[580px] mr-[20px] lg:mr-[auto] lg:ml-[60px]">
            <img
              src={test}
              className="rounded-lg"
              style={{ width: "100%", height: "100%" }}
              alt=''
            />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Home
