import React from 'react'
import ServicesSvg from '../SVG/ServicesSvg'
import RightSectionHeader from '../Typography/RightSectionHeader'
import ServicesBigPara from '../Typography/ServicesBigPara'
import ServicesSmallPara from '../Typography/ServicesSmallPara'
import SubHeading from '../Typography/SubHeading'


const ServicesSvgImage = () => (
  <div className="hidden lg:flex lg:justify-center lg:items-center lg:h-half lg:w-full lg:bg-green-100 ">
    <div className="xl:w-3/6 w-4/6 ml-24">
      <ServicesSvg />
    </div>
  </div>
);


const Services = () => {
  return (
    <>
      <div className="flex lg:mt-70 mt-16 justify-center">
        <div className="lg:w-5/6 md:w-full">
          <RightSectionHeader
            text="Services"
            para="The services I’m willing to provide and getting my expertise on." />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center mt-24">
        <div className="flex flex-col w-full lg:h-100 h-80">
          <ServicesSvgImage />
          <div className="bg-blue-200 h-half w-full flex justify-center items-center">
            <div className="xl:p-12 px-4 py-8 w-full h-full flex justify-center items-center">
              <div className="flex flex-col items-end h-full w-full text-right">
                <div>
                  <SubHeading head="Web" subhead="Design" />
                </div>
                <div className="xxl:w-5/6 w-full bg-white h-full xl:mt-4 mt-10 rounded-xl lg:text-right text-center">
                  <ServicesSmallPara
                    para="My passion is to design a professional yet creative website that
                    reflects the spirit and leaves a lasting, memorable effect." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:h-100 h-80 lg:mt-0 -mt-74">
          <div className="bg-blue-300 h-half w-full">
            <div className="xl:p-12 px-4 py-8 w-full h-full flex justify-center items-center">
              <div className="flex flex-col items-start h-full w-full text-left">
                <div>
                  <SubHeading head="Web" subhead="Development" />
                </div>
                <div className="xxl:w-5/6 w-full bg-white h-full mt-4 rounded-xl lg:text-left text-center">
                  <ServicesBigPara
                    para="I am a Front-End Developer who focuses on writing clean,
                    elegant and efficient code. Also aiming to learn and grapple with
                    most of the new technologies regarding Frontend web development." />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 h-half">
            <div className="xl:p-12 px-4 py-8 w-full h-full flex justify-center items-center">
              <div className="flex flex-col lg:items-start items-end h-full w-full lg:text-left text-right">
                <div>
                  <SubHeading head="UI/UX" subhead="Design" />
                </div>
                <div className="xxl:w-5/6 w-full bg-white h-full xl:mt-4 mt-10 rounded-xl lg:text-left text-center">
                  <ServicesSmallPara
                    para="Aim to design beautiful and functional user experiences
                          that strengthens the brand while ensuring ease of use
                          and simplicity for the audience." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
