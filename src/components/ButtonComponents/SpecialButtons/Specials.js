import React, { useState } from "react";
import '../../../styles/SpecialButton.scss'

//import any components needed
import SpecialButton from './SpecialButton'

//Import your array data to from the provided data file
import { specials } from '../../../data'

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialArray, setSpecialArray] = useState(specials); 
  console.log(specialArray)

  return (
    <div className='special-cont'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialArray.map((sp, i) => <SpecialButton sp={sp} key={i} />)}       
    </div>
  );
};

export default Specials
