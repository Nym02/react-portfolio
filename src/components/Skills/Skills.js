import LeftSectionHeader from '../Typography/LeftSectionHeader';
import SkillsComponents from './SkillsComponents/SkillsComponents';
import fileTypeHtml from '@iconify-icons/vscode-icons/file-type-html';
import fileTypeCss from '@iconify-icons/vscode-icons/file-type-css';
import fileTypeMongo from '@iconify-icons/vscode-icons/file-type-mongo';
import javascriptIcon from '@iconify-icons/logos/javascript';
import sassIcon from '@iconify-icons/logos/sass';
import reactIcon from '@iconify-icons/logos/react';
import githubOctocat from '@iconify-icons/logos/github-octocat';
import redux from '@iconify-icons/logos/redux';
import mysqlIcon from '@iconify-icons/logos/mysql';
import nextjsIcon from '@iconify-icons/logos/nextjs';
import nodejsIcon from '@iconify-icons/logos/nodejs-icon';
import vueIcon from '@iconify-icons/logos/vue';
import nuxtIcon from '@iconify-icons/logos/nuxt-icon';
import figmaIcon from '@iconify-icons/logos/figma';
import adobeXd from '@iconify-icons/cib/adobe-xd';
import adobeIllustrator from '@iconify-icons/cib/adobe-illustrator';

const Skills = () => {
  return (
    <div className="flex justify-center items-center lg:mt-24 mt-12">
      <div className="flex flex-col lg:w-5/6 w-full justify-center items-center lg:px-0 px-2">
        <div className="w-full flex lg:justify-end justify-center items-center">
          <LeftSectionHeader
            text="Skills & Experiences"
            para="The list of skills and experiences currently i have and 
              adapting for the future." />
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:mt-24 sm:mt-16 mt-10">
          <h2 className="font-rajdhani font-semibold text-gray-800 md:text-2xl sm:text-xl text-lg underline">
            Currently using and have good experiences in,
          </h2>
          <div className="flex justify-center items-center md:space-x-16 sm:space-x-8 space-x-1 md:mt-12 mt-8">
            <div>
              <SkillsComponents icon={fileTypeHtml} name="HTML5" />
            </div>
            <div className="flex flex-col md:space-y-12 space-y-6">
              <SkillsComponents icon={fileTypeCss} name="CSS3" />
              <SkillsComponents icon={javascriptIcon} name="JavaScript" />
            </div>
            <div className="flex flex-col md:space-y-12 space-y-6">
              <SkillsComponents icon={sassIcon} name="SASS" />
              <SkillsComponents icon={reactIcon} name="React" />
              <SkillsComponents icon={githubOctocat} name="Github" />
            </div>
            <div className="flex flex-col md:space-y-12 space-y-6">
              <SkillsComponents icon={redux} name="Redux" />
              <SkillsComponents icon={mysqlIcon} name="MySQL" />
            </div>
            <div>
              <SkillsComponents icon={fileTypeMongo} name="MongoDB" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:mt-24 sm:mt-16 mt-10">
          <h2 className="font-rajdhani font-semibold text-gray-800 md:text-2xl sm:text-xl text-lg underline">
            Comfortable and willing to learn more,
          </h2>
          <div className="flex justify-center items-center md:space-x-16 sm:space-x-8 space-x-4 md:mt-12 mt-8">
            <SkillsComponents icon={nextjsIcon} name="Next.js" />
            <SkillsComponents icon={nodejsIcon} name="Node.js" />
            <SkillsComponents icon={vueIcon} name="Vue.js" />
            <SkillsComponents icon={nuxtIcon} name="Nuxt.js" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:mt-24 sm:mt-16 mt-10">
          <h2 className="font-rajdhani font-semibold text-gray-800 md:text-2xl sm:text-xl text-lg underline">
            Additional skills for UI/UX design,
          </h2>
          <div className="flex justify-center items-center md:space-x-16 sm:space-x-8 space-x-6 md:mt-12 mt-8">
            <SkillsComponents icon={figmaIcon} name="Figma" />
            <SkillsComponents icon={adobeXd} name="Adobe XD" />
            <SkillsComponents icon={adobeIllustrator} name="Illustrator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

