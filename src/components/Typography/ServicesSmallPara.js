import React from 'react';

const ServicesSmallPara = (props) => {
  return (
    <>
      <p className="py-8 px-4 font-open font-light xl:leading-12 leading-6 xl:text-3xl lg:text-2xl text-xl">
        {props.para}
      </p>
    </>
  );
};

export default ServicesSmallPara;
