import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { ImFire } from "react-icons/im";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = ({ userpic, setuserpic }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("pictures");
    setuserpic(null);
    navigate("/");
  };

  useEffect(() => {
    setuserpic(localStorage.getItem("pictures"));
  }, [token]);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <nav className="bg-[#0A0A23] p-4 flex justify-between items-center text-[18px] fixed top-0 w-full z-10">
      {/* Left Side - Search (hidden on medium screens) */}
      <div className="hidden md:flex items-center space-x-2 border-white border-2 p-1 w-1/3 md:w-1/3 lg:w-[30%] bg-[#3B3B4F]">
        <AiOutlineSearch className="text-white text-lg md:text-lg lg:text-lg" />
        <input
          type="text"
          placeholder="Search 8,000+ tutorials"
          className="bg-transparent border-none text-white placeholder-gray-400 text-sm"
        />
      </div>
      <div className="flex-grow flex items-center text-white font-semibold space-x-2">
        <div className="text-xl md:text-2xl lg:text-2xl ml-4 md:ml-10 lg:ml-40">
          <Link to={"/"}>
            freeCodeCamp<i class="fab fa-free-code-camp"></i>
          </Link>
          {/* <span className="flex items-center">
            <span className="text-xs md:text-xl lg:text-2xl">freeCodeCamp</span>
            (<ImFire className="text-red-500 text-sm md:text-2xl lg:text-3xl ml-2" />)
          </span> */}
        </div>
      </div>

      <div className="flex space-x-4">
        <button className="text-white border-2 border-white p-1 hover:bg-white hover:text-black rounded-lg text-[10px] md:text-[14px] lg:text-[18px] h-10">
          Menu
        </button>
        {token ? (
          <>
            {userpic ? (
              <img
                onClick={handlelogout}
                src={userpic}
                alt=""
                className="h-10 rounded-full"
              />
            ) : (
              <FaCircleUser size={40} color={"white"} onClick={handlelogout} />
            )}
          </>
        ) : (
          <button
            className="text-white bg-yellow-500 p-1 rounded-lg text-[12px] md:text-[16px] lg:text-[18px] h-10"
            onClick={openLoginModal}
          >
            Sign In
          </button>
        )}
      </div>
      {isLoginModalOpen && (
        <Login
          isOpen={isLoginModalOpen}
          onRequestClose={closeLoginModal}
          setuserpic={setuserpic}
        />
      )}
    </nav>
  );
};

export default Navbar;
