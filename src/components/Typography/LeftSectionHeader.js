import React from 'react';

const LeftSectionHeader = ({ para, text }) => {
  return (
    <>
      <div className="flex lg:flex-row flex-col 
            lg:justify-end justify-center items-center lg:space-x-24 space-x-0">
        <span className="text-gray-800 lg:text-right text-center font-open md:font-light font-regular 
              xl:text-xl lg:text-lg text-base">
          {para}
        </span>
        <h1 className="text-blue-400 font-rajdhani font-semibold 
            xl:text-6xl lg:text-4xl text-3xl lg:order-none order-first">
          {text}
        </h1>
      </div>
    </>
  );
};

export default LeftSectionHeader;
