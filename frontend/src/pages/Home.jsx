import React from "react";
import { FaApple } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center h-screen bg-gray-200">
        <div className="text-left p-4 lg:p-8 lg:text-left space-y-6 lg:space-y-10 mt-10">
          <h1 className="text-2xl lg:text-[45px] font-bold">
            Learn to code - for free
          </h1>
          <h1 className="text-4xl lg:text-[45px] font-bold mt-2 lg:mt-4">
            Build projects.
          </h1>
          <h1 className="text-2xl lg:text-[45px] font-bold mt-2 lg:mt-4">
            Earn certifications.
          </h1>
          <p className="mt-2 lg:mt-4 lg:w-2/3 xl:w-[70%] text-[22.5px]">
            Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
            jobs at tech companies including:
          </p>
          <div className="flex items-center space-x-6 lg:space-x-12 p-2 mt-2 lg:mt-4">
            <FaApple size={42} />
            <span className="text-2xl">Google</span>
            <img
              src="https://th.bing.com/th/id/OIP.9Iedub-fcqMZTm6rtsFKyQHaFj?w=207&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Amazon Logo"
              className="h-20 lg:h-24 xl:h-28 mix-blend-multiply"
            />
            <img
              src="https://th.bing.com/th/id/OIP.RZCjcX0U6tQvtHDB_W_tiQHaCO?w=316&h=105&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Amazon Logo"
              className="h-7 lg:h-9 xl:h-10 mix-blend-multiply"
            />
            <img
              src="https://pic.onlinewebfonts.com/thumbnails/icons_432790.svg"
              alt="Amazon Logo"
              className="h-16 lg:h-40 xl:h-30 mt-2 bg-none"
            />
          </div>
          <div className="mt-2 lg:mt-4 flex items-center justify-center">
            <button className="bg-yellow-500 text-black py-3 px-16 text-2xl">
              Get started (it's free)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
