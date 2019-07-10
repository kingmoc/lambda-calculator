import React, { useState } from "react";
import "./styles/App.scss";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [displayVal, setDisplayVal] = useState('0')
  const [waitForOp, setWaitForOp] = useState(false)
  const [op, setOp] = useState(null)
  const [value, setValue] = useState(null)

  const numClick = digit => {
    console.log(digit)

    if(waitForOp) {
      setDisplayVal(digit)
      setWaitForOp(false)
    } else {
    displayVal === '0' ? setDisplayVal(digit) : setDisplayVal(displayVal + digit)
    }
  }

  const special = e => {
    console.log(e.target.id)

    switch(e.target.id) {
      case 'C':
        setDisplayVal('0')
        break;
      
      case 'x/-':
        displayVal.charAt(0) === '-' ? setDisplayVal(displayVal.substring(1)) : setDisplayVal('-' + displayVal)
        break;

      case '%':
        const percent = parseFloat(displayVal)
        // setDisplayVal(String(percent / 100))
        setDisplayVal(percent / 100)
        break;

      default:
        console.log('error')
    }
  }

  const operator = e => {

    setWaitForOp(true)
    setOp(e.target.id)

    switch(e.target.id) {
      case '/':  
        console.log(waitForOp)     
        break;
      
      case '*':
        break;

      case '-':
        break;
      
      case '+':
          break;

      case '=':
          break;

      default:
        console.log('error')
    }
  }

  return (
    <div className="container">
      <Logo />
      <Display displayVal={displayVal}/>
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <div>
          <Specials special={special}/>
          <Numbers numClick={numClick}/>
        </div>
        <Operators operator={operator}/>
      </div>
    </div>
  );
}

export default App;
