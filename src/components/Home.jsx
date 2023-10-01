import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#504099]">
     
      <div className="max-w-[1000px] mx-auto px-0 flex flex-col justify-center h-full ">
        <p className="text-[#FE7BE5]">Namaste, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Varun Kumar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer.
        </h2>
        <p className="text-[#a3acca] py-4 max-w-[700px]">
          I have a deep passion for crafting web applications that not only look
          stunning but also deliver seamless user experiences. I love to work on
          web applications using technologies like React, Redux, Tailwind,
          Material UI.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FE7BE5] hover:border-[#FE7BE5]">
          <Link to="work" smooth={true} duration={500}>
            View Work
          </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
