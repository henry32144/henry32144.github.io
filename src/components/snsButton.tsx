import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

interface SnsButtonProps {
  to: string;
  className?: string;
  icon: React.ReactNode;
}

const SnsButton: React.FC<SnsButtonProps> = ({ icon, to, className }) => {
  return (
    <a
      className={classNames(
        "cursor-pointer font-poppins bg-white text-gray-lite font-medium flex \
      text-xtiny items-center transition-all duration-300 ease-in-out \
      dark:hover:text-white dark:bg-[#212425] hover:text-white \
      hover:bg-gradient-to-r from-indigo-500 to-violet-500  dark:text-[#A6A6A6]",
        className
      )}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default SnsButton;
