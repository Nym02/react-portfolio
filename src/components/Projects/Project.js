import futbol from "../../assets/futbol.png";
import hungry from "../../assets/hungry_monster.png";
import kontest from "../../assets/kontest.png";
import outdoors from "../../assets/outdoors.png";
import trvl from "../../assets/trvl.png";
import ButtonBlue from "../Button/ButtonBlue";
import RightSectionHeader from "../Typography/RightSectionHeader";
import ProjectComponents from "./ProjectComponents/ProjectComponents";

const Project = () => {
  return (
    <>
      <div className="flex lg:mt-24 mt-12 justify-center">
        <div className="lg:w-5/6 md:w-full">
          <RightSectionHeader
            text="Few Works of Mine "
            para="Here’s few works and pet projects i’ve completed in my journey of learning."
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:mt-24 mt-12">
        <div className="flex flex-col xxl:w-5/6 w-full justify-center items-center lg:px-0 px-2 space-y-9">
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
        <hr />
        <div className="mt-12">
          <ButtonBlue to="/projects" text="View more" />
        </div>
      </div>
    </>
  );
};

export default Project;
