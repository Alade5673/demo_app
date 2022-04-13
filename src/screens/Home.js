import React, {useState} from "react";
import '../App.css';
import Button from '../components/Button';
import test from '../assets/empty.png'
import colored_radio from '../assets/colored_radio.png'
import uncolored_radio from '../assets/uncolored_radio.png'
import Option from '../components/Option';
import { useNavigate, useLocation } from 'react-router-dom';
import Steps from "../components/Steps"

function Home() {
  let location = useLocation();

 const navigate = useNavigate();

 const [toggle, setToggle] = useState(true);
 const toggleButton = () => setToggle(!toggle);

 const [option, setOption] = useState("Send Money");

 const noop = () => {navigate('/send-money')};

  return (
    <div onClick={()=>console.log("hello")}>
      <div className="w-full flex justify-center">
      <div className='w-6/12 flex items-center'>
        <div className="w-[80%] flex flex-col justify-center items-center text-center h-[80%] my-auto rounded-lg bg-white mx-auto">    
        <p className="text-3xl font-bold">
          Get Started with Money App
        </p> 

        <p className="text-sm font-normal mt-4 mx-20">
          Take a tour and see how we have made various financials activities smooth and faster.
        </p>

        <hr className='mt-8'
          style={{
            color:'#000000',
            backgroundColor: '#000000',
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

        <div className="flex mt-10 place-items--center">

          {/* <div className={[toggle ? "border border-sky-500" : "border-2 border-[#E5E5E5]"]} onClick={toggleButton} > */}
          <div className="border border-sky-500 items-center"  onClick={toggleButton} >
            <Option
              width="170px"
              height="100px"
              text="Account Holder"
              color="#0DB9E9"
              // color={toggle ? "#0DB9E9" : "#000000"}
              fontSize='18px'
              fontWeight="normal"
              img={<img className="w-5 h-5 mt-1" src={colored_radio} /> }
              // img={toggle ? <img className="w-5 h-5" src={colored_radio} /> : <img className="w-5 h-5" src={uncolored_radio} />}
              onClick={noop}
            
            />
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
        <div onClick={() => navigate('/move-money')} className="mt-10 mx-auto">
          <Button
            width="300px"
            height="50px"
            text="Launch Demo"
            color="#FFFFFF"
            fontSize='18px'
            fontWeight="normal"
            borderRadius="8px"
            backgroundColor={"#0DB9E9"}

        />

        </div>
        
      </div>
      </div>

      <div className='w-6/12 flex flex-col justify-center items-center rounded-md'>
        <img src={test} className="h-[700px] p-[65px] rounded-md"/>
      </div>

      <div>
        
      </div>
    </div>
    </div>
  );
}

export default Home;
