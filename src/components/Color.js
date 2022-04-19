import React, {useContext} from "react";
import color1 from '../assets/color-one.png'
import color2 from '../assets/color-two.png'
import color3 from '../assets/color-three.png'
import color4 from '../assets/color-four.png'
import color5 from '../assets/color-5.png'
import color6 from '../assets/color-6.png'
import { AppContext } from "../App";

function Color(){
    const {setColor} = useContext(AppContext)
    return(
        <div className="flex space-x-1 place-items-center justify-center" >
            <div className="w-4 h-4 bg-[#43D2FA] rounded-[40px] cursor-pointer" onClick={() => setColor("#43D2FA")} />
            <div className="w-4 h-4 bg-[#094357] rounded-[40px] cursor-pointer" onClick={() => setColor("#094357")} />
            <div className="w-4 h-4 bg-[#00B058] rounded-[40px] cursor-pointer" onClick={() => setColor("#00B058")} />
            <div className="w-4 h-4 bg-[#1D3B32] rounded-[40px] cursor-pointer" onClick={() => setColor("#1D3B32")} />
            <div className="w-4 h-4 bg-[#FF9505] rounded-[40px] cursor-pointer" onClick={() => setColor("#FF9505")} />
            <div className="w-4 h-4 bg-[#573302] rounded-[40px] cursor-pointer" onClick={() => setColor("#573302")} />
            <div className="w-4 h-4 bg-[#AD283D] rounded-[40px] cursor-pointer" onClick={() => setColor("#AD283D")} />
            <div className="w-4 h-4 bg-[#331418] rounded-[40px] cursor-pointer" onClick={() => setColor("#331418")} />
            <div className="w-4 h-4 bg-[#0059AC] rounded-[40px] cursor-pointer" onClick={() => setColor("#0059AC")} />
            <div className="w-4 h-4 bg-[#051B30] rounded-[40px] cursor-pointer" onClick={() => setColor("#051B30")} />
        
            {/* <img src={color1} className="w-5 h-4 cursor-pointer" onClick={() => setColor("#0db9e9")}/>
            <img src={color2} className="w-4 h-3 cursor-pointer" onClick={() => setColor("#ffc06a")}/>
            <img src={color3} className="w-4 h-3 cursor-pointer" onClick={() => setColor("#950de9")}/>
            <img src={color4} className="w-4 h-3 cursor-pointer" onClick={() => setColor("#66b428")}/>
            <img src={color5} className="w-4 h-3 cursor-pointer" onClick={() => setColor("#989898")}/>
            <img src={color6} className="w-4 h-3 cursor-pointer" onClick={() => setColor("#000000")}/> */}

            {/* <p className="customize">
                    MORE AVAILABLE
            </p>

            <img src={arrow} className="w-3 h-3"/> */}

         </div>
    )
}

export default Color;