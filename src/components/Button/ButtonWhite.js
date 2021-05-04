import React from 'react';
import { Link } from 'react-router-dom';

const ButtonWhite = (props) => {
  return (
    <>
      <Link
        to={props.to}
        className="xxl:px-6 xl:px-5 lg:px-4 md:px-3 px-2 py-1 
        bg-white hover:bg-blue-400 border-2 border-blue-400 rounded text-blue-400 hover:text-white 
          xl:text-2xl lg:text-lg text-base font-medium font-rajdhani">
        {props.text}
      </Link>
    </>
  );
};

export default ButtonWhite;
