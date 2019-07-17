import React from "react";

const SpecialButton = ( { specialChar } ) => {
  return (
    <button className = 'special-button'>
      {specialChar}
    </button>
  );
};

export default SpecialButton;