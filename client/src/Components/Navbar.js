import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

const[toggle,settoggle]=useState(false);

const toggleMenu=()=>{
  settoggle(!toggle);
}

  return (
    <div className="w-full top-0 left-0">
      <div className="relative md:flex justify-between py-4 items-center px-4">
        <Link to='/'>
          <span className="text-lg font-extrabold ">SUMAN Blogs</span>
        </Link>
        
          <ul className="md:flex items-center space-x-6 hidden">
          <li>Art</li>
          <li>Science</li>
          <li>Technology</li>
          <li>Logout</li>
          <Link to='/write' className='px-2 py-4 bg-sky-100 rounded-full'>Write</Link>
          </ul>
      </div>
    </div>
  )
}

export default Navbar