import React from "react";
import '../../styles/Display.scss'

const Display = (props) => {
  return (
    <div className="display">
      <p>{props.displayVal}</p>
    </div>
  )
};

export default Display
