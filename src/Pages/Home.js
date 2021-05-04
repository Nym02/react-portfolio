import bgImage from '../assets/profile bg final 2.svg';
import Header from '../components/Header/Header';
import Project from '../components/Projects/Project';
import Services from '../components/Services/Services';
import Skills from '../components/Skills/Skills';

const Home = () => {
  return (
    <>
      <div className="absolute bg-center bg-no-repeat -mt-24 z-0">
        <img src={bgImage} alt="svgImage" />
      </div>
      <Header />
      <Services />
      <Skills />
      <Project />
    </>
  );
};

export default Home;
