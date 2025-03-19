import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { IoCartOutline , IoHeartOutline } from "react-icons/io5";
const Navbar = () => {
  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    <li><NavLink to="/statistics">Statistics</NavLink></li>
  </>

  return (
    <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-base text-gray-400  z-[1] mt-3 w-52 p-2 ">
              {links}
            </ul>
          </div>
          <a className="btn text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base text-gray-400">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <a className="bg-white  text-[#3A3A3A] text-3xl font-bold">
            <IoCartOutline></IoCartOutline>
          </a>
          <a className="bg-white  text-[#3A3A3A] text-3xl font-bold">
            <IoHeartOutline ></IoHeartOutline>
          </a>
        </div>
    </div>
  );
};

export default Navbar;