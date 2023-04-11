// Import React
import React from "react";

// Define the component
type InfoCardProps = {
  icon: React.ReactNode;
  label: string;
  content: string | React.ReactNode;
};

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  label,
  content,
}) => {
  return (
    <div className="flex items-center">
      {icon}
      <div className="space-y-1">
        <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
        <h6 className="font-medium dark:text-white">{content}</h6>
      </div>
    </div>
  );
};

// Export the component
export default InfoCard;
