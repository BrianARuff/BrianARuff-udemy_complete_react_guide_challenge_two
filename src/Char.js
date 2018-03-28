import React from "react";

const Char = props => {
  return(
    <div onClick={props.removeCharOnClick} className='char'>{props.character}</div>
  )
};

export default Char;
