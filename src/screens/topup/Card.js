import Button from "../../components/Button"
import Steps from "../../components/Steps"
import '../../App.css';
import card from '../../assets/card.png'
import { useNavigate } from 'react-router-dom';

function Card(){

     const navigate = useNavigate();

    return(
        <div className="flex -mt-20 bg-[#E5E5E533]">

         <div className="w-5/12">
           <div className="ml-40 mt-60">
           <Steps
              width="210px"
              height="210px"
              borderRadius="8px"
              backgroundColor="#202020"
              text={
                <div className="pt-5 pl-3 items-start">
                  <p className="font-bold text-left text-lg pl-1">
                    Add Card
                  </p>
                  <p className="text-xs text-left mt-3 pl-1">
                    Your wallet can be funded via card or from your bank account with an easy click.

                  </p>

                  <div className="flex space-x-6 mr-3">
                  <button className="p-1 w-20 mt-4 border-2 border-[#FFFFFF] " onClick={() => {navigate('/fund')}}>
                    Back
                  </button>

                  <button className="p-1 w-20 mt-4 border-2 border-[#FFFFFF] " onClick={() => {navigate('/card-next')}}>
                    Next
                  </button>
                  </div>
                </div>
                
              }
              color="#ffffff"
              >
        
        </Steps>
         </div>
        
         </div>

         <div className="w-3/12 flex">
           <img src={card} className="mt-20"/>

           <div className="pl-5 pr-40 mt-[200px]">
             <Steps
              width="120px"
              height="70px"
              borderRadius="8px"
              backgroundColor="#202020"
              text={
                <div className="pt-5 pl-3 items-start">
                  <p className="try">
                    Try it
                  </p>
                  <p className="click">
                    Click this input fields
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

export default Card