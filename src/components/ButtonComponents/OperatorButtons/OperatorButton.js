import React from "react";
import '../../../styles/OperatorButton.scss'

const OperatorButton = (props) => {
  console.log(props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button 
      className='calcButton opButton' 
      onClick={props.operator}
      id={props.op.value}
      >
        {props.op.char}
      </button>
    </>
  );
};
  
export default OperatorButton
