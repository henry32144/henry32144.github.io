// write a nav bar
import React from "react";

import { Link } from "gatsby";
import NavButton from "./navbutton";
import brandLogo from "../../public/static/logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="container">
      <header className="flex justify-between items-center fixed lg:static">
        <div className="flex justify-between w-full px-4 lg:px-0">
          <div className="flex justify-between items-center space-x-4 lg-my-8 my-5">
            <Link to="/">
              <img
                src={brandLogo}
                className="h-[56px] lg:h-[64px]"
                alt="logo"
              ></img>
            </Link>
          </div>
          {/* Mobile nav menu*/}
          <div className="flex items-center"></div>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex my-12">
            <li className="mb-1">
              <NavButton to="/about">About</NavButton>
            </li>
            <li>
              <NavButton to="/resume">Resume</NavButton>
            </li>
            <li>
              <NavButton to="/works">Works</NavButton>
            </li>
            <li>
              <NavButton to="/contacts">Contacts</NavButton>
            </li>
            <span
              className="bg-white w-[40px] 
            hover:text-white 
            hidden h-[40px] 
            rounded-full lg:flex 
            justify-center 
            items-center 
            text-black 
            hover:bg-[#ef4060]
            transition-all duration-300 ease-in-out cursor-pointer ml-2 "
            ></span>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
