import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { AiOutlineTeam } from "react-icons/ai";
import {
  MdOutlineArrowBack,
  MdCategory,
  MdOutlineCode,
  MdDiscount,
  MdOutlineLink,
} from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
import Card from "../../components/card";
import InfoCard from "../../components/infoCard";
import PageTitle from "../../components/pageTitle";
import Seo from "../../components/seo";

type ProjectPageProps = PageProps & {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        slug: string;
        category: string;
        type: string;
        link: string;
        code: string;
        skills: string;
        teamMembers: string;
        description: string;
        hero_image_alt: string;
        hero_image_credit_link: string;
        hero_image_credit_text: string;
        hero_image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    };
  };
};

const Project: React.FC<ProjectPageProps> = ({ data, children }) => {
  React.useEffect(() => {
    console.log(data);
  }, []);

  const imageData = getImage(data.mdx.frontmatter.hero_image);

  const parseDomain = (url: string) => {
    const domain = url
      .replace("https://", "")
      .replace("http://", "")
      .split(/[/?#]/)[0];
    return domain;
  };

  return (
    <Card>
      <div className="py-12">
        <PageTitle text="Project" />
      </div>
      <div className="pb-4 inline-flex items-center">
        <MdOutlineArrowBack className="text-neutral-400" />
        <Link
          className="ml-1 text-md font-medium text-neutral-400"
          to="/portfolio"
        >
          Back to Portfolio
        </Link>
      </div>
      <div className="pb-4">
        <h4 className="text-2xl font-medium mb-2.5 dark:text-white">
          {data.mdx.frontmatter.title}
        </h4>
      </div>
      <div className="pb-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="flex col-span-12 sm:col-span-6">
            <InfoCard
              icon={
                <span className="p-1 text-[#2d64bc] dark:bg-dark-icon-bg mr-2.5 shadow-md flex items-center justify-center rounded-md w-12 h-12">
                  <MdCategory size={26} />
                </span>
              }
              label="Category"
              content={data.mdx.frontmatter.category}
            />
          </div>
          <div className="flex col-span-12 sm:col-span-6">
            <InfoCard
              icon={
                <span className="p-1 text-emerald-500 dark:text-emerald-600 mr-2.5 shadow-md flex items-center justify-center rounded-md w-12 h-12">
                  <AiOutlineTeam size={26} />
                </span>
              }
              label="Team Members"
              content={data.mdx.frontmatter.teamMembers}
            />
          </div>
          <div className="flex col-span-12 sm:col-span-6">
            <InfoCard
              icon={
                <span className="p-1 text-purple-600 dark:text-purple-600 mr-2.5 shadow-md flex items-center justify-center rounded-md w-12 h-12">
                  <MdDiscount size={26} />
                </span>
              }
              label="Type"
              content={data.mdx.frontmatter.type}
            />
          </div>
          {data.mdx.frontmatter.link && (
            <div className="flex col-span-12 sm:col-span-6">
              <InfoCard
                icon={
                  <span className="p-1 text-amber-600 dark:text-amber-600 mr-2.5 shadow-md flex items-center justify-center rounded-md w-12 h-12">
                    <RiExternalLinkLine size={26} />
                  </span>
                }
                label="Preview"
                content={
                  <a
                    className="hover:text-indigo-500 duration-300 transition"
                    href={data.mdx.frontmatter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {parseDomain(data.mdx.frontmatter.link)}
                  </a>
                }
              />
            </div>
          )}
          {data.mdx.frontmatter.code && (
            <div className="flex col-span-12 sm:col-span-6 lg:col-span-4">
              <InfoCard
                icon={
                  <span className="p-1 text-violet-600 dark:text-violet-600 mr-2.5 shadow-md flex items-center justify-center rounded-md w-12 h-12">
                    <MdOutlineLink size={26} />
                  </span>
                }
                label="Code"
                content={
                  <a
                    className="hover:text-indigo-500 duration-300 transition"
                    href={data.mdx.frontmatter.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {parseDomain(data.mdx.frontmatter.code)}
                  </a>
                }
              />
            </div>
          )}
          <div className="flex col-span-12">
            <InfoCard
              icon={
                <span className="p-1 text-rose-600 dark:text-rose-600 mr-2.5 shadow-md flex items-center justify-center rounded-md w-12 h-12">
                  <MdOutlineCode size={26} />
                </span>
              }
              label="Skills"
              content={data.mdx.frontmatter.skills}
            />
          </div>
        </div>
      </div>
      <div className="pb-4">
        <p className="text-gray-500 text-lg dark:text-gray-400 leading-7">
          {data.mdx.frontmatter.description}
        </p>
      </div>
      <div className="overflow-hidden rounded-lg pb-12">
        {imageData && (
          <GatsbyImage
            className="w-full rounded-lg h-auto"
            image={imageData}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
        )}
      </div>
    </Card>
  );
};

export default Project;

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM, YYYY")
        category
        type
        link
        code
        skills
        teamMembers
        description
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

type HeadProps = {
  mdx: any;
  data: ProjectPageProps["data"];
};

const Head: HeadFC<HeadProps> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
);
