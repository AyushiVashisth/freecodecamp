import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PiDesktopTowerLight } from "react-icons/pi";
import { RiTodoLine } from "react-icons/ri";
import { SiDatagrip } from "react-icons/si";
import { BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import { GrDatabase } from "react-icons/gr";

function Course() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    const apiUrl = "https://freecodecamp-gkj9.onrender.com/course";

    axios
      .get(apiUrl)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div className="bg-white mt-20">
      <div>
        <div className="sm:w-[80%] w-full m-auto text-center">
          <h1 className="mt-4 text-2xl">Welcome to freeCodeCamp.org</h1>
          <h2 className="mt-4 text-xl">
            "I have not failed. I've just 10,000 ways"
          </h2>
          <h2 className="mt-1 text-xl">that won't work."</h2>
          <p>- Thomas A. Edison</p>
          {courses.map((item, i) => (
            <div
              className="sm:w-[74%] w-[90%] mt-4 border-[3px] border-[#0A0A23] m-auto bg-slate-200 flex p-2 px-4 items-center sm:flex-row sm:gap-0 gap-4 flex-col hover:bg-black hover:text-white"
              key={i}
            >
              {renderIcon(i)}
              <h1 className="xl:text-lg lg:text-lg md:text-md sm:text-sm text-xl ml-3">
                {item.course}
                {item.duration}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function renderIcon(icon_id) {
  switch (icon_id) {
    case 0:
      return <PiDesktopTowerLight className="sm:text-5xl text-6xl font-bold" />;
    case 1:
      return <PiDesktopTowerLight className="sm:text-5xl text-6xl font-bold" />;
    case 2:
      return <BiLogoJavascript className="sm:text-5xl text-6xl font-bold" />;
    case 3:
      return <BiLogoReact className="sm:text-5xl text-6xl font-bold" />;
    case 4:
      return <GrDatabase className="sm:text-5xl text-6xl font-bold" />;
    case 5:
      return <SiDatagrip className="sm:text-5xl text-6xl font-bold" />;
    case 6:
      return <RiTodoLine className="sm:text-5xl text-6xl font-bold" />;
    default:
      return null;
  }
}

export default Course;
