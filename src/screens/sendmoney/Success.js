import React, {useState} from "react";
import Button from "../../components/Button"
import Steps from "../../components/Steps"
import '../../App.css';
import arrow from '../../assets/arrow.png'
import keypad from '../../assets/keypad.png'
import snt from '../../assets/snt.png'
import InputField from "../../components/InputField";
import { useNavigate } from 'react-router-dom';
import Color from "../../components/Color";
import arrow_down  from '../../assets/arrow-down.png'

function Success(){

    const [toggle, setToggle] = useState(false);
    const toggleButton = () => setToggle(!toggle);

    const navigate = useNavigate();
    return(
        <div className="w-full flex justify-center">

         <div className="w-5/12 flex justify-left mx-48">
           <div className="mt-24 mx-28">
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
                    With Money App your money is sent before you blink and smile.
                  </p>

                  <div className="flex space-x-4 mr-3 mt-2">
                  <button className="p-1 w-16 mt-4 border-[1px] text-sm border-[#FFFFFF] ml-1" onClick={() => {navigate('/send-next')}}>
                    Back
                  </button>

                  <button className="p-1 w-28 mt-4 border-[1px] text-sm border-[#FFFFFF] " onClick={() => {navigate('/')}}>
                    Finish Demo
                  </button>
                  </div>
                </div>
                
              }
              color="#ffffff"
              >
        
        </Steps>
         </div>

          {toggle == true ? <div className="absolute bottom-20 ml-44">
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

        <div className="flex ml-40 absolute bottom-3 bg-[#FFFFFF] space-x-3 p-4 w-[350px]  ">

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

         <div className="w-6/12 -ml-20">

             <img src={snt} className="w-[260px] h-[500px] mt-24 rounded-md"/>
           
            
         </div>
        </div>
    )
}

export default Success