import React, {useState} from 'react'

function Text(props) {

    const [size] = useState(props.size);
    const [variant] = useState(props.variant);
  return (
    <text className={`text-${variant} btn-${size}`}>{props.children}</text>
  )
}

export default Text;
