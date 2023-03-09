import React from "react";
import classNames from "classnames";

interface NavButtonProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<NavButtonProps> = ({ className, children }) => {
  return (
    <div className={classNames("min-h-[50vh] rounded-2xl bg-white", className)}>
      {children}
    </div>
  );
};

export default Card;
