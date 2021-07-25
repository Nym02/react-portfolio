import advocate from '../assets/advocate.png';
import futbol from "../assets/futbol.png";
import hungry from "../assets/hungry_monster.png";
import kontest from "../assets/kontest.png";
import outdoors from "../assets/outdoors.png";
import trvl from "../assets/trvl.png";
import ProjectComponents from "../components/Projects/ProjectComponents/ProjectComponents";

const Projects = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-12 text=2xl font-open font-light text-center p-2">
        All web related landing page and projects i have done and currenly working on is given below,
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:mt-24 mt-12">
        <div className="flex flex-col xxl:w-5/6 w-full justify-center items-center lg:px-0 px-2 space-y-9">
        <ProjectComponents
            src={advocate}
            title="advocate managements system"
            live="https://xattorney.app/"
            git="https://github.com/Nym02/xAttorney"
            details="Advocate Management System. This will help advocate to manage their cases. Advocates will also be able to manage their different clients with financial matters."
          />
          <ProjectComponents
            src={futbol}
            title="futbol"
            live="https://vigorous-kilby-cddeb1.netlify.app/"
            git="https://github.com/Nym02/futbol-react"
            details="A simple website for viewing premier league team details"
          />
          <ProjectComponents
            src={trvl}
            title="Travel"
            live="https://travel-website-kappa.vercel.app"
            git="https://github.com/Nym02/travel-spa-react"
            details="A travel website landing page design using HTML, CSS in react."
          />
          <ProjectComponents
            src={hungry}
            title="Hungry Monster"
            live="https://nym02.github.io/hungry-monster/"
            git="https://github.com/Nym02/hungry-monster"
            details="A simple food recipe search app using Vanilla JS."
          />
          <ProjectComponents
            src={kontest}
            title="Kontest"
            live="https://nym02.github.io/kontest-programming/"
            git="https://github.com/Nym02/kontest-programming"
            details="A simple website where you can see all the programming contest is happening or will happen in the future."
          />
          <ProjectComponents
            src={outdoors}
            title="Holiday Home"
            live="https://nym02.github.io/HolidayHomes/"
            git="https://github.com/Nym02/HolidayHomes"
            details="Travel Agency landing page using HTML5, CSS3 and SASS."
          />
        </div>
        {/* <hr /> */}
       
      </div>
      {/* <h1>Coming Soon..</h1> */}
    </>
  );
};

export default Projects;
