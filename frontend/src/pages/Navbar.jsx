import React from 'react'
import logo from "../assets/swiggy.png"
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { SiSwiggy } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="bg-gray-100 p-3 flex justify-between items-center h-20">
      <div className="flex items-center ml-20 cursor-pointer">
        <Link to="/">
        <SiSwiggy className="text-orange-600 w-28 h-16" />
        </Link>
        
      </div>
      <ul className="flex justify-center items-center ">
        <li
          className="px-fit mx-3 text-lg hover:border-b-4 hover:border-red-400 transition-all duration-100 cursor-pointer font-medium uppercase"
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="px-fit mx-3 text-lg hover:border-b-4 hover:border-red-400 transition-all duration-100 cursor-pointer font-medium uppercase"
          
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className="px-fit mx-3 text-lg hover:border-b-4 hover:border-red-400 transition-all duration-100 cursor-pointer font-medium uppercase"
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <BsCart className="w-10 h-6 mr-20 cursor-pointer" />
    </div>
  )
}

export default Navbar