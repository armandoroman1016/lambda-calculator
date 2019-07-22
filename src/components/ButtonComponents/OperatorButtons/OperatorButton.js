import React from "react";

const OperatorButton = ({char, value}) => {

  return (
    <button className = 'operatorButton'>
      {char}
    </button>
  );
};

export default OperatorButton;