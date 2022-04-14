import React from "react";
import color1 from '../assets/color-one.png'
import color2 from '../assets/color-two.png'
import color3 from '../assets/color-three.png'
import color4 from '../assets/color-four.png'
import color5 from '../assets/color-5.png'
import color6 from '../assets/color-6.png'

function Color({setColor}){

    return(
        <div className="flex space-x-1 place-items-center justify-center" >

            <img src={color1} className="w-4 h-4 cursor-pointer" onClick={() => setColor("#0db9e9")}/>
            <img src={color2} className="w-3 h-3 cursor-pointer" onClick={() => setColor("#ffc06a")}/>
            <img src={color3} className="w-3 h-3 cursor-pointer" onClick={() => setColor("#950de9")}/>
            <img src={color4} className="w-3 h-3 cursor-pointer" onClick={() => setColor("#66b428")}/>
            <img src={color5} className="w-3 h-3 cursor-pointer" onClick={() => setColor("#989898")}/>
            <img src={color6} className="w-3 h-3 cursor-pointer" onClick={() => setColor("#000000")}/>

            {/* <p className="customize">
                    MORE AVAILABLE
            </p>

            <img src={arrow} className="w-3 h-3"/> */}

         </div>
    )
}

export default Color;