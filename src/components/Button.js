import React from "react";

function Button({
    width,
    height,
    text,
    color,
    fontSize,
    fontWeight,
    borderRadius,
    backgroundColor,
    onClick
}){

    return(
        <button className="mt-10 -ml-36" style={{width, height, text, color, fontSize, fontWeight, borderRadius, backgroundColor, onClick}} >
            {text}
        </button>
    )
}

export default Button;


// import React, {useState} from "react";

// function Button(props){

    // const [size] = useState(props.size);
    // const [variant] = useState(props.variant);
//     // const [text] = useState(props.text);

//     return(
//         <div>
//             <button className={`btn-${variant} btn-${size}`}>{props.children}</button>
//         </div>
//     )
// }

// export default Button;