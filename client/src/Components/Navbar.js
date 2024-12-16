import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight, BsFillPenFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { authToken, logout } = useContext(UserContext);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-gray-900 sticky top-0 left-0 w-full z-10 text-white">
      <div className="relative md:flex justify-between items-center px-4 py-2">
        <div>
          <Link to="/">
            <span className="text-lg font-extrabold">Blog Website</span>
          </Link>
        </div>

        <ul className="md:flex items-center space-x-6 hidden">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          {authToken ? (
            <span onClick={logout} className="cursor-pointer">
              Logout
            </span>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <Link className="space-x-1" to="/write">
            <button className="bg-gray-700 text-white rounded-md py-2 px-4 flex items-center">
              Write
              <BsFillPenFill className="ml-1" />
            </button>
          </Link>
        </ul>

        <ul
          className={`absolute md:hidden bg-slate-200 text-black w-full h-screen top-0 left-0 flex flex-col items-center justify-center z-50 text-4xl space-y-8 transform mt-11 ${
            toggle ? "block translate-x-0" : "hidden translate-x-full"
          } transition-transform duration-300`}
        >
          <Link to="/about" className="flex items-center justify-center">
            About Us
          </Link>
          <Link to="/contact" className="flex items-center justify-center">
            Contact Us
          </Link>
          {authToken ? (
            <span onClick={logout} className="cursor-pointer">
              Logout
            </span>
          ) : (
            <Link to="/login" className="flex items-center justify-center">
              Login
            </Link>
          )}
          <Link className="space-x-1 " to="/write">
            <button className="bg-gray-700 text-white rounded-md py-2 px-4 flex items-center">
              Write
              <BsFillPenFill className="ml-1" />
            </button>
          </Link>
        </ul>

        <GiHamburgerMenu
          className="absolute cursor-pointer block md:hidden right-4 top-4 scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        />
      </div>
      <hr className="border-black" />
    </div>
  );
};

export default Navbar;
