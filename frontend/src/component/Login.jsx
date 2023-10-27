import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Login({ isOpen, onRequestClose, setuserpic }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showToast = (message, success) => {
    toast[success ? "success" : "error"](message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignIn) {
      if (formData.email && formData.password) {
        try {
          const response = await axios.post(
            "https://freecodecamp-gkj9.onrender.com/users/login",
            formData
          );
          const { message, success } = response.data;
          let pic = localStorage.getItem("pictures");
          if (pic) {
            setuserpic(pic);
          } else {
            setuserpic(false);
          }
          console.log(response);
          localStorage.setItem("token", response.data.token);
          console.log("data", response.data);
          showToast(message, success);
          onRequestClose();
        } catch (error) {
          console.error("Axios error:", error);
          showToast("Login failed", false);
        }
      } else {
        showToast("Please enter your email and password.", false);
      }
    } else {
      if (formData.name && formData.email && formData.password) {
        try {
          const response = await axios.post(
            "https://freecodecamp-gkj9.onrender.com/users/register",
            formData
          );
          const { message, success } = response.data;
          console.log("dataR", response.data);
          showToast(message, success);
        } catch (error) {
          console.error("Axios error:", error);
          showToast("Registration failed", false);
        }
      } else {
        showToast("Fill all the fields", false);
      }
    }
  };

  const handleToggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="fixed inset-0" onClick={onRequestClose}></div>
      <div className="bg-[#0A0A23] w-96 p-4 rounded-lg shadow-lg z-50 text-white relative">
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-white"
          onClick={onRequestClose}
        >
          <IoCloseSharp className="text-3x" />
        </button>
        <div className="text-center mb-4">
          <FaRocket className="text-4xl mb-2 text-blue-500" />
          <h2 className="text-2xl font-semibold">
            {isSignIn ? "Login" : "Sign Up"}
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          {!isSignIn && (
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border-none focus:border-none focus:bg-back focus:bg-opacity-40 focus:backdrop-blur-lg rounded-md bg-black bg-opacity-40 backdrop-blur-lg"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border-none focus:border-none rounded-md bg-black bg-opacity-40 backdrop-blur-lg"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border-none rounded-md bg-black bg-opacity-40 backdrop-blur-lg"
              placeholder="Your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md w-full"
            >
              {isSignIn ? "Login" : "Sign Up"}
            </button>
          </div>
          <div className="mt-4 text-center">
            {isSignIn ? (
              <div>
                <GoogleOAuthProvider clientId="1703372067-fnl8l67jdq9si2542j498n5a0in7to1m.apps.googleusercontent.com">
                  <GoogleLogin
                    id="google-login-button"
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                      const details = jwtDecode(credentialResponse.credential);
                      console.log(details);
                      localStorage.setItem(
                        "token",
                        credentialResponse.credential
                      );
                      localStorage.setItem("pictures", details.picture);
                      navigate("/course");
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </GoogleOAuthProvider>
                <p>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="text-blue-500 hover:underline"
                    onClick={handleToggleSignIn}
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  onClick={handleToggleSignIn}
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default Login;
