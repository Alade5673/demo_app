import React from 'react'

function Option({
    width,
    height,
    text,
    color,
    fontSize,
    fontWeight,
    img,
    value
}){

    return(
        <button className="flex border-[#243c5a] place-content-center pt-9 " style={{width, height, text, color, fontSize, fontWeight, img, value}}>
            {img}&nbsp;{text}         
        </button>
    )

}

export default Option