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
        "lg:container lg:mx-auto lg:rounded-2xl bg-white dark:bg-[#111111] sm:px-5 md:px-10 lg:px-20 shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
