import React from 'react';

const SubHeading = ({ head, subhead }) => {
  return (
    <>
      <h3 className="flex flex-col font-rajdhani lg:font-regular font-medium text-gray-800 xxl:text-4xl xl:text-3xl text-2xl">
        {head} <span>{subhead}</span>
      </h3>
    </>
  );
};

export default SubHeading;
