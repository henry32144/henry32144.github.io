import React from "react";
import classNames from "classnames";

interface AvatarProps {
  className?: string;
  src: string;
}

const Avatar: React.FC<AvatarProps> = ({ className, src }) => {
  return <img className={classNames("rounded-full", className)} src={src} />;
};

export default Avatar;
