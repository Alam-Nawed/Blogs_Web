import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight, BsFillPenFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const {authToken,logout}=useContext(UserContext);

  const toggleMenu = () => {
    settoggle(!toggle);
  };

  return (
    <div className="bg-gray-900 sticky z-10 w-full top-0 left-0 text-white">
      <div className="relative md:flex justify-between py-4 items-center px-4">
        <div>
          <Link to="/">
            <span className="text-lg font-extrabold ">Bloggo</span>
          </Link>
        </div>

        <ul className="md:flex items-center space-x-6 hidden">
          <Link to="/">Home</Link>
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
            <button className="bg-gray-700 text-white rounded-md py-2 px-4 flex flex-row items-center">
              Write
              <BsFillPenFill />
            </button>
          </Link>
        </ul>

        <ul
          className={`absolute md:hidden top-[61px] left-0 w-full h-[32vh] items-center bg-white space-y-4 justify-center transform ${
            toggle ? "block" : "hidden"
          }`}
        >
          <Link className="flex items-center justify-center">Interview</Link>
          <Link className="flex items-center justify-center">Blog</Link>
          <Link className="flex items-center justify-center">Graveyard</Link>
          <Link className="flex items-center justify-center">Products</Link>
          <div className="flex items-center justify-center">
            <button className="bg-black text-white rounded-md py-2 px-4 flex items-center justify-center">
              Subscribe
              <BsArrowRight />
            </button>
          </div>
        </ul>

        <GiHamburgerMenu
          className="absolute cursor-pointer block md:hidden right-8 top-6 scale-110"
          onClick={toggleMenu}
        />
      </div>
      <hr className="border-black" />
    </div>
  );
};

export default Navbar;
