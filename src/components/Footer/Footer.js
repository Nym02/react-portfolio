import gmailIcon from "@iconify-icons/cib/gmail";
import githubSquare from "@iconify-icons/fa-brands/github-square";
import linkedinIcon from "@iconify-icons/fa-brands/linkedin";
import Icon from "@iconify/react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-24">
        <div className="flex space-x-7">
          <a href="https://github.com/Nym02">
            <Icon
              icon={githubSquare}
              className="lg:text-5xl md:text-4xl text-3xl text-gray-800"
            />
          </a>
          <a href="https://www.linkedin.com/in/nayeemmuzahid/">
            <Icon
              icon={linkedinIcon}
              className="lg:text-5xl md:text-4xl text-3xl text-blue-700"
            />
          </a>
          <a href="mailto:nayeem.muzahid@northsouth.edu">
            <Icon
              icon={gmailIcon}
              className="lg:text-5xl md:text-4xl text-3xl text-red-600"
            />
          </a>
        </div>
        <div className="mt-20 font-open font-regular lg:text-xl md:text-lg text-md text-gray-800">
          2020 &copy;{" "}
          <span className="font-rajdhani font-bold lg:text-2xl md:text-xl text-lg py-4 text-blue-400">
            Nayeem M. Muzahid
          </span>
          . All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
