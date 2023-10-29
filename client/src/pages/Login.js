import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {


  const navigate=useNavigate()

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/user/login", input);
      navigate('/')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-sky-200">
      <div className="w-[50vh] shadow-md p-6 space-y-4 bg-white rounded-md">
        <div className="text-xl font-bold text-center">Login Form</div>
        <div className="flex items-center justify-center">
          <input
          name="email"
            onChange={handleChange}
            placeholder="Enter the Email"
            type="email"
            className="py-2 px-1 border-b-2 border-gray-400 border-solid"
          />
        </div>
        <div className="flex items-center justify-center">
          <input
          name="password"
            onChange={handleChange}
            placeholder="Enter the Password"
            type="password"
            className="py-2 px-1 border-b-2 border-gray-400 border-solid"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="py-2 px-2 bg-sky-700 hover:bg-sky-800 text-white w-48"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <div className="flex justify-center text-sm space-x-1">
          <div>Dont have an account?</div>
          <div className="hover:underline">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
