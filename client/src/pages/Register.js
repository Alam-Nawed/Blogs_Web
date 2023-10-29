import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, json } from "react-router-dom";
import axios from "axios";

const Register = () => {

  const navigate=useNavigate()

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value}));

  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:4000/user/register',input)
      navigate('/login')
    }catch(err){
      console.error(err);
    }

  };

  return (
    <div className="flex items-center justify-center bg-sky-200 h-screen">
      <div className="w-[50vh] shadow-md p-6 space-y-4 bg-white rounded-md">
        <div className="text-xl font-bold text-center">Registration Form</div>
        <div className="flex items-center justify-center">
          <input
            onChange={handleChange}
            name="username"
            placeholder="Enter username"
            type="text"
            required
            className="py-2 px-1 border-b-2 border-gray-400 border-solid"
          />
        </div>
        <div className="flex items-center justify-center">
          <input
            onChange={handleChange}
            name="email"
            placeholder="Enter the Email"
            type="email"
            required
            className="py-2 px-1 border-b-2 border-gray-400 border-solid"
          />
        </div>
        <div className="flex items-center justify-center">
          <input
            onChange={handleChange}
            name="password"
            placeholder="Enter the Password"
            type="password"
            required
            className="py-2 px-1 border-b-2 border-gray-400 border-solid"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="py-2 px-2 bg-sky-700 hover:bg-sky-800 text-white w-48"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
        <div className="flex justify-center text-sm space-x-1">
          <div>Dont have an account?</div>
          <div className="hover:underline">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
