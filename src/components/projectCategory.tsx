import React from "react";

type ProjectCategoryProps = {
  category: string;
};

const ProjectCategory: React.FC<ProjectCategoryProps> = ({ category }) => {
  return <div className="flex items-center"></div>;
};

// Export the component
export default ProjectCategory;
