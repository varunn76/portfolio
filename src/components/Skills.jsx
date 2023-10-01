import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import React from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Redux from "../assets/redux.png";
import Nextjs from "../assets/next.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#504099] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#FE7BE5]">
            Skills
          </p>
          <p className="py-4">
            These are the technologies I&apos;ve worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-orange-500 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-blue-500 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-yellow-500 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="JS icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-blue-500 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={React} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-purple-500 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Redux} alt="Redux icon" />
            <p className="my-4">Redux</p>
          </div>
          <div className="shadow-md shadow-gray-500 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Nextjs} alt="Next js icon" />
            <p className="my-4">Next.js</p>
          </div>
          <div className="shadow-md shadow-[#539E43] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-gray-500 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-sky-500 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Tailwind}
              alt="Tailwindcss icon"
            />
            <p className="my-4">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
