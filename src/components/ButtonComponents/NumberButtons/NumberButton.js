import React from "react";
import '../../../styles/NumberButton.scss'

const NumberButton = (props) => {
  // console.log(props.num)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="calcButton">{props.num}</button>
    </>
  );
};

export default NumberButton
