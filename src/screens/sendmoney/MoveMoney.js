import React, {useState} from "react";
import Button from "../../components/Button"
import Steps from "../../components/Steps"
import '../../App.css';
import arrow from '../../assets/arrow.png'
// import test from '../assets/test.png'
import keypad from '../../assets/keypad.png'
import { useNavigate } from 'react-router-dom';
import Color from "../../components/Color";
import arrow_down  from '../../assets/arrow-down.png'

function MoveMoney(){

     const navigate = useNavigate();

      const [toggle, setToggle] = useState(false);
      const toggleButton = () => setToggle(!toggle);

    return(
        <div className="w-full flex justify-center">
         <div className="w-6/12">
           <div className="mt-24">
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
                  <div className="flex space-x-6 mr-3 mt-1">
                    <button className="p-1 w-20 mt-4 border-[1px] text-sm border-[#FFFFFF] ml-1" onClick={() => {navigate('/')}}>
                    Back
                  </button>

                  <button className="p-1 w-20 mt-4 border-[1px] text-sm border-[#FFFFFF] " onClick={() => {navigate('/send-money')}}>
                    Next
                  </button>
                  </div>
                  
                </div>
                
              }
              color="#ffffff"
              >
        
        </Steps>
         </div>

        {toggle == true ? <div className="ml-60 mt-16">
           <Steps
              width="300px"
              height="200px"
              borderRadius="8px"
              backgroundColor="#202020"
              text={
                <div className="pt-5 pl-3 items-start">
                  <p className="header">
                    CUSTOMIZATIONS AVAIABLE MONEY APP
                  </p>
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
              >
        
        </Steps>
 
         </div> : null }

        <div className="flex ml-40 -mt-20 absolute bottom-20 bg-[#FFFFFF] space-x-3 p-4 w-[350px] ">

          <p className="customize">
                    CUSTOMIZE
            </p>

           <Color/>

            <div className="flex space-x-2" onClick={toggleButton}>
              <p className="customize">
                    MORE AVAILABLE
            </p>

            <img src={arrow_down} className="w-3 h-3"/>
            </div>
        </div>
        
         </div>
           
           <div className="bg-[#ffffff] p-5 mt-20 -ml-10 h-[530px] w-[270px] relative flex flex-col justify-right items-right rounded-md">
              <div className="flex space-x-16">
                <img src={arrow} className="h-[13px]"/>

                <p className="move">
                    Move Money
                  </p>
              </div>

              <p className="bal">
                  Account balance : $6,790
              </p>

              <p className="zero" onClick={() => {navigate('/send-money')}}>
                  $0
              </p>

              <div className="flex space-x-3 mt-16">
                  <Button
                    width="230px"
                    height="40px"
                    text="To Friends"
                    color="#FFFFFF"
                    fontSize='12px'
                    fontWeight="normal"
                    borderRadius="8px"
                    backgroundColor={"#E8E8E8"}

                />

                <Button
                    width="230px"
                    height="40px"
                    text="To Bank"
                    color="#FFFFFF"
                    fontSize='12px'
                    fontWeight="normal"
                    borderRadius="8px"
                    backgroundColor={"#E8E8E8"}

                />
              </div>
            
              <div className="">
                <img src={keypad} />
              </div>

           </div>
           
          
        </div>
    )
}

export default MoveMoney