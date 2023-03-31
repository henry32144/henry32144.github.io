// write a nav bar
import React from "react";

import { Link } from "gatsby";
import LinkButton from "./linkButton";
import brandLogo from "../images/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { BsFileText } from "react-icons/bs";
import { MdOutlineGridView } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { TbSunMoon } from "react-icons/tb";

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

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
              <LinkButton
                to="/about"
                className="rounded-md mx-2.5 px-2 py-2.5 md:px-4 xl:px-5"
              >
                <AiOutlineUser className="mr-2" />
                About
              </LinkButton>
            </li>
            <li>
              <LinkButton
                to="/resume"
                className="rounded-md mx-2.5 px-2 py-2.5 md:px-4 xl:px-5"
              >
                <BsFileText className="mr-2" />
                Resume
              </LinkButton>
            </li>
            <li>
              <LinkButton
                to="/portfolio"
                className="rounded-md mx-2.5 px-2 py-2.5 md:px-4 xl:px-5"
              >
                <MdOutlineGridView className="mr-2" />
                Portfolio
              </LinkButton>
            </li>
            <li>
              <LinkButton
                to="/contacts"
                className="rounded-md mx-2.5 px-2 py-2.5 md:px-4 xl:px-5"
              >
                <RiContactsBookLine className="mr-2" />
                Contact
              </LinkButton>
            </li>
            <span
              className="bg-white w-[44px] h-[44px] 
            hover:text-white 
            hidden
            rounded-full lg:flex 
            justify-center 
            items-center 
            text-black 
            hover:bg-indigo-500
            transition-all duration-300 ease-in-out cursor-pointer ml-2"
              onClick={() => setIsDark(!isDark)}
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
