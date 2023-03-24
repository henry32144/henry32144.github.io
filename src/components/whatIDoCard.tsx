// Import React
import React from "react";
import classNames from "classnames";

// Define the component
type WhatIDoCardProps = {
  icon: React.ReactNode;
  title: string;
  description?: string;
  bgColor?: string;
};

const WhatIDoCard: React.FC<WhatIDoCardProps> = ({
  icon,
  title,
  description,
  bgColor,
}) => {
  return (
    <div
      className={classNames(
        "flex gap-4 rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:bg-transparent",
        bgColor
      )}
    >
      {icon}
      <div className="space-y-2 break-words">
        <h3 className="dark:text-white text-xl font-semibold">{title}</h3>
        <p className="leading-8 text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

// Export the component
export default WhatIDoCard;
