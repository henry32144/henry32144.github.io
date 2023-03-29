import React, { FC } from "react";
import classNames from "classnames";

interface ExperienceProps {
  date: string;
  title: string;
  institution: string;
  logo?: string;
  bgColor?: string;
}

const Experience: FC<ExperienceProps> = ({
  date,
  title,
  institution,
  logo,
  bgColor,
}) => {
  return (
    <div
      className={classNames(
        "flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent",
        bgColor
      )}
    >
      <div className="flex flex-col flex-1">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">{date}</span>
        <span className="text-xl font-semibold">{title}</span>
        <span className="text-base dark:text-gray-400">{institution}</span>
      </div>
      {logo && (
        <div className="ml-auto md:flex flex-col flex-grow-0 items-center justify-center hidden dark:hidden">
          <img className="h-[80px]" src={logo} />
        </div>
      )}
    </div>
  );
};

export default Experience;
