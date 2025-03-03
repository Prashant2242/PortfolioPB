import React from "react";
import weather from "../../public/weather.png";
import pizza from "../../public/pizza.png";
import YummyBite from "../../public/YummyBite.png";
import bingstream from "../../public/bingstream.webp";
import chat from "../../public/chat.jpg";
import portfolio from "../../public/portfolio.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: YummyBite,
      name: "YummyBite",
      About:"Food Delivery App",
      skills:"Reactjs|Redux|TwailwindCSS",
      github: "https://github.com/Prashant2242/yummyBite-App",
    },
    {
      id: 2,
      logo: bingstream,
      name: "BingStreamer",
      About:"Video Streaming Platform",
      skills:"Reactjs|CSS3",
      github: "https://github.com/yourusername/express-project",
    },
    {
      id: 3,
      logo: chat,
      name: "Realtime ChatApp",
      About:"ChatApp",
      skills:"Reactjs|Firebase",
      github: "https://github.com/Prashant2242/Realtime-ChatApp",
    },
    {
      id: 4,
      logo: portfolio,
      name: "Portfolio Website",
      About:"Portfolio",
      skills:"Reactjs|TwailwindCSS",
      github: "",
    },
    {
      id: 5,
      logo: pizza,
      name: "Pizza Sales Analysis",
      About:"Sales Analysis",
      skills:"SQL|MYSQL",
      github: "https://github.com/Prashant2242/Pizza-Sales-Analysis",
    },
    {
      id: 6,
      logo: weather,
      name: "Weatherly",
      About:"Weather-App",
      skills:"Reactjs|CSS3",
      github: "https://github.com/Prashant2242/Weather-Application",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gray-100 max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl  text-center font-bold mb-5">Portfolio</h1>
        <span className=" text-blue-500 text-center font-semibold">Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, github ,skills,About}) => (
            <div
              className="text-center md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className=" w-[290px] h-[135px] p-3  border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {About}
                </p>
                <p className="px-2 text-gray-700">
                  {skills}
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                  onClick={() => window.open(github, "_blank")}
                >
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
