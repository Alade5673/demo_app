import Button from "../../components/Button"
import Steps from "../../components/Steps"
import '../../App.css';
import arrow from '../../assets/arrow.png'
// import test from '../assets/test.png'
import keypad from '../../assets/keypad.png'
import { useNavigate } from 'react-router-dom';

function TopNext() {

  const navigate = useNavigate();

  return (
    <div className="flex -mt-20 bg-[#E5E5E533]">

      <div className="w-5/12">
        <div className="ml-40 mt-60">
          <Steps
            width="200px"
            height="160px"
            borderRadius="8px"
            backgroundColor="#202020"
            text={
              <div className="pt-5 pl-3 items-start">
                <p className="font-bold text-left text-lg pl-1">
                  Top Up
                </p>
                <p className="text-xs text-left mt-3 pl-1">
                  Top up your wallet with little or no stress.

                </p>

                <div className="flex space-x-6 mr-3">
                  <button className="p-1 w-20 mt-4 border-2 border-[#FFFFFF] " onClick={() => { navigate('/top-up') }}>
                    Back
                  </button>

                  <button className="p-1 w-20 mt-4 border-2 border-[#FFFFFF] " onClick={() => { navigate('/fund') }}>
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

        <div className="bg-[#ffffff] p-10 mt-20">
          <div className="flex space-x-20">
            <img alt='' src={arrow} className="w-3 h-3" />

            <p className="move">
              Top Up
            </p>
          </div>

          <p className="bal">
            Account balance : $6,790
          </p>

          <p className="amount">
            $390
          </p>

          <div className="ml-36 mt-32">
            <Button
              width="220px"
              height="40px"
              text="Top Up"
              color="#000000"
              fontSize='12px'
              fontWeight="normal"
              borderRadius="8px"
              backgroundColor={"#989898"}

            />

          </div>
          <img src={keypad} alt='' />

        </div>


      </div>
    </div>
  )
}

export default TopNext