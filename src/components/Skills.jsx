import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import C from "../../public/C.png";
import javascript from "../../public/javascript.png";
import MYSQL from "../../public/MYSQL.png";
import reactjs from "../../public/reactjs.png";
import redux from "../../public/redux.png";
function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS3",
    },
    {
      id: 3,
      logo: javascript,
      name: "Javascript",
    },
    {
      id: 4,
      logo: C,
      name: "C++",
    },
    {
      id: 5,
      logo: MYSQL,
      name: "MYSQL",
    },
    {
      id: 6,
      logo: reactjs,
      name: "Reactjs",
    },
    {
      id: 7,
      logo: redux,
      name: "Redux",
    },
  ];
  return (
    <div
      name="Skills"
      className="bg-gray-100 max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl text-center font-bold mb-5">Skills</h1>
       
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
