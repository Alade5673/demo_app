import Button from "../../components/Button"
import Steps from "../../components/Steps"
import '../../App.css';
import arrow from '../../assets/arrow.png'
import keypad from '../../assets/keypad.png'
import snt2 from '../../assets/snt2.png'
import InputField from "../../components/InputField";
import { useNavigate } from 'react-router-dom';

function TopSuccess(){

    const navigate = useNavigate();
    return(
        <div className="flex -mt-20 bg-[#E5E5E533]">

         <div className="w-5/12">
           <div className="ml-40 mt-60">
           <Steps
              width="240px"
              height="180px"
              borderRadius="8px"
              backgroundColor="#202020"
              text={
                <div className="pt-5 pl-3 items-start">
                  <p className="font-bold text-left text-md pl-1 mr-5">
                    TopUp Successful
                  </p>
                  <p className="text-xs text-left mt-3 pl-1 pr-10">
                    With money app your wallet top up in completed in split seconds.
                  </p>

                  <div className="flex space-x-4 mr-3 mt-2">
                  <button className="p-1 w-16 mt-4 border-2 border-[#FFFFFF] ml-1" onClick={() => {navigate('/card-next')}}>
                    Back
                  </button>

                  <button className="p-1 w-28 mt-4 border-2 border-[#FFFFFF] " onClick={() => {navigate('/')}}>
                    Finish Demo
                  </button>
                  </div>
                </div>
                
              }
              color="#ffffff"
              >
        
        </Steps>
         </div>

        
         {/* <div className="flex bg-[#FFFFFF] space-x-3">
            <p className="customize">
                    CUSTOMIZE
            </p>

            <p className="customize">
                    MORE AVAILABLE
            </p>

         </div> */}
         </div>

         <div className="w-4/12 flex">

             <img src={snt2} className="w-[400px] h-[800px] mt-20"/>
           
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
        </div>
    )
}

export default TopSuccess