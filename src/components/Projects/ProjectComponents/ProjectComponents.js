import githubAlt from "@iconify-icons/fa/github-alt";
import Icon from "@iconify/react";

import "./ProjectComponents.css";

const ProjectComponents = ({ src, title, details, live, git }) => {
  return (
    <>
      <div className="flex lg:flex-row flex-col xxl:w-5/6 xl:w-8/12 lg:w-10/12 w-full items-center justify-center lg:h-70 h-auto p-10 nm-convex-white-sm rounded-xl">
        <div className="lg:w-half w-full flex lg:justify-start justify-center items-center">
          <img src={src} alt="projects" className="h-56 w-auto project-img" />
        </div>
        <div className="lg:w-half w-full flex flex-col justify-evenly h-60">
          <h3 className="font-rajdhani font-semibold text-gray-800 text-2xl lg:text-left text-center">
            {title}
          </h3>
          <p className="font-open md:font-light font-regular text-gray-800 lg:text-left text-center">
            {details}
          </p>
          <div className="flex lg:justify-start justify-center items-center space-x-8">
            <div className="text-2xl text-gray-800 hover:text-blue-400">
              <a href={git}>
                <Icon icon={githubAlt} />
              </a>
            </div>
            <div className="font-open text-lg font-semibold">
              <a
                href={live}
                target="_blank"
                className="px-1 py-1 bg-blue-400 text-white hover:text-blue-400 hover:bg-white rounded"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectComponents;
