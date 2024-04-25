import React from 'react'
import logo from "../assets/swiggy.png"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="pt-3 w-full h-auto bg-blue-900 sm:flex sm:flex-row ">
      <div className="w-full px-8 max-w-7xl">
        <div className="grid  grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center mb-10 w-28 h-20">
            <img src={logo} alt="big logo of the company" />
          </div>
          <div className="grid  grid-cols-2 gap-4 text-white mb-5">
            <ul>
              <p className="font-bold tracking-wide mb-2 text-xl" >Company</p>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Team</Link>
              </li>
            </ul>
            <ul>
              <p className="font-bold tracking-wide mb-2 text-xl">Contact us</p>
              <li>
              <Link to="/">Team</Link>
              </li>
              <li>
              <Link to="/">Partnerw</Link>
              </li>
            </ul>
            
          </div>
        </div>
        <div className="">
          
        </div>
      </div>
    </footer>
  )
}

export default Footer