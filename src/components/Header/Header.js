import React from "react";

import ButtonBlue from "../Button/ButtonBlue";
import ButtonWhite from "../Button/ButtonWhite";
import HeaderSvg from "../SVG/HeaderSvg";

const Header = () => {
  return (
    <div className="flex justify-center lg:mt-20 mt-8">
      <div className="flex lg:flex-row flex-col lg:w-5/6 w-full justify-between items-center">
        <div className="lg:w-half w-full lg:px-0 px-1 ">
          <div className="lg:text-left text-center">
            <h2 className="xl:text-4xl lg:text-3xl text-2xl font-rajdhani leading-none font-medium text-gray-900">
              Hi, I am <br />
              <span className="xl:text-6xl lg:text-4xl text-3xl font-semibold text-blue-400">
                Nayeem M. Muzahid
              </span>
            </h2>
            <p className="md:font-light fon-regular xl:text-xl lg:text-lg text-base text-gray-800 font-open lg:leading-7 md:leading-6 leading-5 mt-2">
              An enthausisat{" "}
              <span className="xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm font-bold">
                Frontend Web Developer
              </span>
            </p>
            <p className="md:font-light fon-regular xl:text-xl lg:text-lg text-sm text-gray-800 mt-4 font-open lg:leading-7 md:leading-6 leading-5">
              I am trying to keep up with new & modern web <br />
              technologies and focusing on learning new <br />
              things.
            </p>
          </div>
          <div className="mt-9 flex lg:justify-start justify-center space-x-9">
            <ButtonWhite to="/resume" text="Resume" />
            <ButtonBlue to="/projects" text="Projects" />
          </div>
        </div>
        <div className="flex lg:justify-end justify-center lg:w-1/2 w-full lg:order-none order-first lg:mb-0 mb-8">
          <HeaderSvg />
        </div>
      </div>
    </div>
  );
};

export default Header;
