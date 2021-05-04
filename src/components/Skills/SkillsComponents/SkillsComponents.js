import React from 'react'
import Icon from '@iconify/react';

const SkillsComponents = ({ name, icon }) => {
  return (
    <>
      <div className="lg:h-36 sm:h-24 h-16 lg:w-36 sm:w-24 w-16 flex justify-center items-center md:nm-convex-white shadow-none rounded-md">
        <div className="flex flex-col items-center lg:p-4 md:p-2 p-2">
          <Icon icon={icon} className="lg:text-7xl md:text-6xl text-5xl" />
          <h3 className="font-open font-semibold lg:text-xl text-lg text-gray-800 sm:mt-2 mt-0 text-center">
            {name}
          </h3>
        </div>
      </div>
    </>
  );
};

export default SkillsComponents;
