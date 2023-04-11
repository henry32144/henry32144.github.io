import * as React from "react";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import classNames from "classnames";

interface ProjectCardProps {
  title: string;
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  imageAlt: string;
  category: string;
  slug: string;
  className?: string;
  cardBgColor?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  imageAlt,
  category,
  className,
  cardBgColor,
  slug,
}) => {
  const imageData = getImage(image);

  return (
    <div
      className={classNames(
        "rounded-lg p-6 dark:border-[2px] border-[#212425] dark:bg-transparent cursor-pointer transition duration-200 ease-in-out transform hover:scale-105",
        className,
        cardBgColor
      )}
      onClick={() => {
        navigate(`/portfolio/${slug}`);
      }}
    >
      <div className="overflow-hidden rounded-lg">
        {imageData && (
          <GatsbyImage
            className="w-full rounded-lg h-auto"
            image={imageData}
            alt={imageAlt}
          />
        )}
      </div>
      <span className="pt-5 text-[14px] font-normal text-gray-500 block dark:text-[#A6A6A6]">
        {category}
      </span>
      <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-indigo-500 dark:hover:text-indigo-500 dark:text-white mt-2">
        {title}
      </h2>
    </div>
  );
};

export default ProjectCard;
