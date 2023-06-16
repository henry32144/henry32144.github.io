// write a nav bar
import React from "react";

import classNames from "classnames";
import { Link } from "gatsby";
import LinkButton from "./linkButton";
import brandLogo from "../images/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { BsFileText } from "react-icons/bs";
import { MdOutlineGridView, MdMenu, MdOutlineClose } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { TbSunMoon } from "react-icons/tb";

interface NavbarProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const linkButtonStyle = "rounded-md mx-2.5 px-2 py-2.5 md:px-4 xl:px-5 shadow-lg"
const smLinkButtonStyle = "rounded-md mx-2.5 px-2 py-4 md:px-4 xl:px-5 "

const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark }) => {
  const url = typeof window !== "undefined" ? window.location?.pathname : "";
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="lg:container lg:mx-auto">
      <header className="flex justify-between items-center top-0 left-0 w-full fixed lg:static z-[100]">
        <div className="flex justify-between w-full px-4 lg:px-0 bg-slate-50 lg:bg-transparent lg:dark:bg-transparent dark:bg-black">
          <div className="flex justify-between w-full items-center space-x-4 lg-my-8 my-5">
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
            {/* Mobile nav menu*/}
            <div className="flex items-center">
              <span
                className="bg-white w-[44px] h-[44px] 
              hover:text-white 
              lg:hidden
              rounded-full
              flex 
              justify-center 
              items-center 
              text-black 
              hover:bg-indigo-500
              transition-all duration-300 ease-in-out cursor-pointer ml-2 shadow-lg"
                onClick={() => setIsDark(!isDark)}
              >
                <TbSunMoon />
              </span>
              <span
                className="lg:opacity-0 lg:invisible visible opacity-100 
                bg-white w-[44px] h-[44px] 
              hover:text-white 
              rounded-full
              flex 
              justify-center 
              items-center 
              text-black 
              hover:bg-indigo-500
              transition-all duration-300 ease-in-out cursor-pointer ml-2 shadow-lg"
                onClick={() => setShowMenu(!showMenu)}
              >
                {showMenu ? <MdOutlineClose /> : <MdMenu />}
              </span>
            </div>
          </div>
        </div>
        {/* Mobile nav */}
        <nav
          className={classNames(
            { hidden: !showMenu },
            { block: showMenu },
            "lg:hidden"
          )}
        >
          <ul
            className={
              "block lg:hidden absolute left-0 rounded-b-[20px] top-20 z-[100] w-full bg-white dark:bg-[#212425] drop-shadow-lg py-4"
            }
          >
            <li>
              <LinkButton
                to="/about"
                active={url.includes("about")}
                className={smLinkButtonStyle}
                onClick={() => setShowMenu(false)}
              >
                <AiOutlineUser className="mr-2" />
                About
              </LinkButton>
            </li>
            <li>
              <LinkButton
                to="/resume"
                active={url.includes("resume")}
                className={smLinkButtonStyle}
                onClick={() => setShowMenu(false)}
              >
                <BsFileText className="mr-2" />
                Resume
              </LinkButton>
            </li>
            <li>
              <LinkButton
                to="/portfolio"
                active={url.includes("portfolio")}
                className={smLinkButtonStyle}
                onClick={() => setShowMenu(false)}
              >
                <MdOutlineGridView className="mr-2" />
                Portfolio
              </LinkButton>
            </li>
            <li>
              <LinkButton
                to="/contacts"
                active={url.includes("contacts")}
                className={smLinkButtonStyle}
                onClick={() => setShowMenu(false)}
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
            transition-all duration-300 ease-in-out cursor-pointer ml-2 shadow-lg"
              onClick={() => setIsDark(!isDark)}
            >
              <TbSunMoon />
            </span>
          </ul>
        </nav>
        <nav className={"hidden lg:block"}>
          <ul className={"hidden lg:flex my-12"}>
            <li>
              <LinkButton
                to="/about"
                active={url.includes("about")}
                className={linkButtonStyle}
              >
                <AiOutlineUser className="mr-2" />
                About
              </LinkButton>
            </li>
            <li>
              <LinkButton
                to="/resume"
                active={url.includes("resume")}
                className={linkButtonStyle}
              >
                <BsFileText className="mr-2" />
                Resume
              </LinkButton>
            </li>
            <li>
              <LinkButton
                to="/portfolio"
                active={url.includes("portfolio")}
                className={linkButtonStyle}
              >
                <MdOutlineGridView className="mr-2" />
                Portfolio
              </LinkButton>
            </li>
            <li>
              <LinkButton
                to="/contacts"
                active={url.includes("contacts")}
                className={linkButtonStyle}
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
            transition-all duration-300 ease-in-out cursor-pointer ml-2 shadow-lg"
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
