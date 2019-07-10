import React from "react";
import '../../../styles/SpecialButton.scss'

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='calcButton spButton' onClick={props.special} id={props.sp}>{props.sp}</button>

    </>
  );
};

export default SpecialButton
