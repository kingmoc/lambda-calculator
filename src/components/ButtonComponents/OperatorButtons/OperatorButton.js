import React from "react";
import '../../../styles/OperatorButton.scss'

const OperatorButton = (props) => {
  console.log(props.op.char)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='calcButton opButton'>{props.op.char}</button>
    </>
  );
};

export default OperatorButton
