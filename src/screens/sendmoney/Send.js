import React, {useState} from "react";
import Button from "../../components/Button"
import Steps from "../../components/Steps"
import '../../App.css';
import arrow from '../../assets/arrow.png'
import keypad from '../../assets/keypad.png'
import addValue from '../../assets/addValue.png'
import InputField from "../../components/InputField";
import { useNavigate } from 'react-router-dom';
import Color from "../../components/Color";
import arrow_down  from '../../assets/arrow-down.png'

function Send(){

    const [toggle, setToggle] = useState(false);
    const toggleButton = () => setToggle(!toggle);

    const navigate = useNavigate();

    return(
        <div className="flex -mt-72 bg-[#E5E5E533] pb-10">

         <div className="w-5/12">
           <div className="ml-40 mt-48">
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
                    With saved beneficiaries, you do not have to input friends bank detail consistently. 
                  </p>

                  <div className="flex space-x-6 mr-3">
                  <button className="p-1 w-20 mt-4 border-[1px] border-[#FFFFFF] text-sm" onClick={() => {navigate('/send-money')}}>
                    Back
                  </button>

                  <button className="p-1 w-20 mt-4 border-[1px] border-[#FFFFFF] text-sm" onClick={() => {navigate('/send-next')}}>
                    Next
                  </button>
                  </div>
                </div>
                
              }
              color="#ffffff"
              >
        
        </Steps>
         </div>

        {toggle == true ? <div className="ml-60 mt-12">
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

         <div className="w-4/12 flex ml-10">

             <img src={addValue} className="w-[510px] h-[600px] mt-32" onClick={() => {navigate('/send-next')}}/>
           
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
           <div className="hint ml-4 pl-10 pr-40 mt-[195px]">
             <Steps
              width="120px"
              height="70px"
              borderRadius="8px"
            //   backgroundColor="#202020"
              text={
                <div className="pt-3 pl-3 -ml-8 items-start">
                  <p className="try">
                    Try it
                  </p>
                  <p className="click">
                    Click the input fields
                  </p>

                </div>
                
              }
              color="#ffffff"
              >
        
        </Steps>
           </div>
            
         </div>
        </div>
    )
}

export default Send