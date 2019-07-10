import React, { useState } from "react";
import '../../../styles/OperatorButton.scss'

//import any components needed
import OperatorButton from './OperatorButton'

//Import your array data to from the provided data file
import { operators } from '../../../data'

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [opArray, setOpArray] = useState(operators);
  console.log(opArray) 
  return (
    <div className='op-cont'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {opArray.map((op, i) => <OperatorButton op={op} key={i} operator={props.operator}/>)}
    </div>
  );
};

export default Operators
