import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

interface LinkButtonProps {
  to: string;
  target?: string;
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  children,
  className,
  target,
  active = false,
}) => {
  return (
    <Link
      to={to}
      className={
        active
          ? classNames(
              "cursor-pointer font-poppins text-gray-lite font-medium flex \
      text-xtiny items-center transition-all duration-300 ease-in-out \
      text-white  \
      bg-gradient-to-r from-indigo-500 to-violet-500 ",
              className
            )
          : classNames(
              "cursor-pointer font-poppins bg-white text-gray-lite font-medium flex \
      text-xtiny items-center transition-all duration-300 ease-in-out \
      dark:hover:text-white dark:bg-[#212425] hover:text-white \
      hover:bg-gradient-to-r from-indigo-500 to-violet-500  dark:text-[#A6A6A6]",
              className
            )
      }
      target={target}
    >
      {children}
    </Link>
  );
};

export { LinkButtonProps };
export default LinkButton;
