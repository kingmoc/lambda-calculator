import React, { useState } from "react";
import '../../../styles/NumberButton.scss'

//import any components needed
import NumberButton from './NumberButton'

//Import your array data to from the provided data file
import { numbers } from '../../../data'

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numArray, setNumbers] = useState(numbers)
  // console.log(numArray)
  return (
    <div className="numbers-cont">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numArray.map(num => <NumberButton num={num} key={num} numClick={props.numClick}/>)}
    </div>
  );
};

export default Numbers;