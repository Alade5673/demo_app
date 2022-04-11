import React from 'react'

function Steps(
    {
    height,
    width,
    borderRadius,
    backgroundColor,
    text,
    color,
},
    ...props
){
    return(
        <div style={{height, width, borderRadius, backgroundColor, text, color,}}>
            {text}{props.children}         
        </div>

        // <div className="flex border-[#243c5a] place-content-center pt-9 " style={{width, height, text, color, fontSize, fontWeight, borderRadius, backgroundColor}}>
        //     {props.children}         
        // </div>
    )

}

export default Steps