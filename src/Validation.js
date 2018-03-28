import React from "react";

const Validation = props => {
  if (props.text <= 5) {
    return <p>Text too long...</p>;
  } else {
    return <p>Test long enough...</p>
  } 
};

export default Validation;
