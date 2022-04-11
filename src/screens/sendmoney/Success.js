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
        <div className="flex -mt-60 bg-[#E5E5E533]">

         <div className="w-5/12 ml-20">
           <div className="ml-20 mt-48">
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

          {toggle == true ? <div className="ml-40 mt-12">
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

        <div className="flex ml-40 -mt-20 absolute bottom-8 bg-[#FFFFFF] space-x-3 p-4 w-[350px] ">

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

         <div className="w-4/12 ml-5 pb-5 flex">

             <img src={snt} className="w-[300px] h-[650px] mt-20"/>
           
            
         </div>
        </div>
    )
}

export default Success