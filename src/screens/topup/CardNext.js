import Button from "../../components/Button"
import Steps from "../../components/Steps"
import '../../App.css';
import card_next from '../../assets/card-next.png'
import { useNavigate } from 'react-router-dom';

function CardNext(){

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
                  <button className="p-1 w-20 mt-4 border-2 border-[#FFFFFF] " onClick={() => {navigate('/card')}}>
                    Back
                  </button>

                  <button className="p-1 w-20 mt-4 border-2 border-[#FFFFFF] " onClick={() => {navigate('/top-success')}}>
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
           <img src={card_next} className="mt-20"/>

            
         </div>
        </div>
    )
}

export default CardNext