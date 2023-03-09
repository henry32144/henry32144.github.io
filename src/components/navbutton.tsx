import React from "react";

import { Link } from "gatsby";

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="px-2 rounded-md cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex 
                  text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out 
                  dark:hover:text-white dark:bg-[#212425] hover:text-white 
                  hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] "
    >
      {children}
    </Link>
  );
};

export default NavButton;
