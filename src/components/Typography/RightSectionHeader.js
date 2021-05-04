import React from 'react';

const RightSectionHeader = ({ text, para }) => {
  return (
    <>
      <div className="flex lg:flex-row flex-col lg:justify-start justify-center items-center 
      lg:space-x-24 space-x-0">
        <h1 className="text-blue-400 font-rajdhani font-semibold 
        xl:text-6xl lg:text-4xl text-3xl">
          {text}
        </h1>
        <span className="text-gray-800 font-open md:font-light font-regular 
        xl:text-xl lg:text-lg text-base lg:text-left text-center">
          {para}
        </span>
      </div>
    </>
  );
};

export default RightSectionHeader;
