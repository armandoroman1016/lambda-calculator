import React, {useState} from "react";

//import any components needed

import SpecialButton from './SpecialButton'

//Import your array data to from the provided data file

import { specials } from '../../../data.js'

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialCharState, setSpecialCharState] = useState(specials)
  console.log(specialCharState)
  return (
    <div className = 'special-buttons'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialCharState.map((char,index) => (
         <SpecialButton specialChar = {char} key = {index} />
       ))}
    </div>
  );
};

export default Specials;