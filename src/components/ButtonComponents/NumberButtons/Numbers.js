import React, { useState } from "react";


//import any components needed

import NumberButton from './NumberButton.js'


//Import your array data to from the provided data file
import { numbers } from '../../../data'

const Numbers = () => {
  // STEP 2 - add the imported data to state

  const [numbersState, setNumberState] = useState(numbers)
  console.log({numbersState})
  return (
    <div className = 'number-buttons'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbersState.map((num,index) => ( 
        <NumberButton key = {index} number = {num} />
          ))}
    </div>
  );
};

export default Numbers;