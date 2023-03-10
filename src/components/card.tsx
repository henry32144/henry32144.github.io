import React from "react";
import classNames from "classnames";

interface NavButtonProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<NavButtonProps> = ({ className, children }) => {
  return (
    <div
      className={classNames(
        "container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
