// write a nav bar
import React from "react";

import { Link } from "gatsby";
import NavButton from "./navbutton";
import brandLogo from "../images/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { BsFileText } from "react-icons/bs";
import { SlWrench } from "react-icons/sl";
import { RiContactsBookLine } from "react-icons/ri";
import { TbSunMoon } from "react-icons/tb";

const Navbar: React.FC = () => {
  return (
    <div className="container">
      <header className="flex justify-between items-center fixed lg:static">
        <div className="flex justify-between w-full px-4 lg:px-0">
          <div className="flex justify-between items-center space-x-4 lg-my-8 my-5">
            <Link to="/">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500 text-4xl font-bold">
                CHENG-HAN
              </h1>
              {/* <img
                src={brandLogo}
                className="h-[36px] lg:h-[48px]"
                alt="logo"
              ></img> */}
            </Link>
          </div>
          {/* Mobile nav menu*/}
          <div className="flex items-center"></div>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex my-12">
            <li className="mb-1">
              <NavButton to="/about">
                <AiOutlineUser className="mr-2" />
                About
              </NavButton>
            </li>
            <li>
              <NavButton to="/resume">
                <BsFileText className="mr-2" />
                Resume
              </NavButton>
            </li>
            <li>
              <NavButton to="/works">
                <SlWrench className="mr-2" />
                Works
              </NavButton>
            </li>
            <li>
              <NavButton to="/contacts">
                <RiContactsBookLine className="mr-2" />
                Contacts
              </NavButton>
            </li>
            <span
              className="bg-white w-[40px] 
            hover:text-white 
            hidden h-[40px] 
            rounded-full lg:flex 
            justify-center 
            items-center 
            text-black 
            hover:bg-indigo-500
            transition-all duration-300 ease-in-out cursor-pointer ml-2 "
            >
              <TbSunMoon />
            </span>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
