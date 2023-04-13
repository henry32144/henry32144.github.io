import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import Card from "../components/card";
import PageTitle from "../components/pageTitle";
import Seo from "../components/seo";
import ProjectCard from "../components/projectCard";
import tempImage from "../images/background.jpg";
import { withSize } from "react-sizeme";
import StackGrid from "react-stack-grid";

type Size = {
  width: number;
  height: number;
};

type PortfolioPageProps = PageProps & {
  data: {
    allMdx: {
      nodes: [
        {
          frontmatter: {
            title: string;
            date: string;
            slug: string;
            category: string;
            type: string;
            link: string;
            code: string;
            skills: string;
            bgColor: string;
            hero_image_alt: string;
            hero_image_credit_link: string;
            hero_image_credit_text: string;
            thumbnail: {
              childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
              };
            };
          };
          id: string;
        }
      ];
    };
  };
  size: Size;
};

type ResponsiveWidthParams = {
  size: Size;
};

const PortfolioPage: React.FC<PortfolioPageProps> = ({ data, size }) => {
  React.useEffect(() => {
    console.log(data);
  }, []);

  const { nodes } = data.allMdx;

  const responsiveWidth = ({ size }: ResponsiveWidthParams): string => {
    // lg
    if (size.width >= 1024) {
      return "33.33%";
    }
    // md
    else if (size.width >= 640) {
      return "50%";
      // sm
    } else {
      return "100%";
    }
  };

  const responsiveWidthValue = responsiveWidth({ size });

  return (
    <Card>
      <div className="py-12">
        <PageTitle text="Portfolio" />
      </div>
      <ul className="flex w-full justify-start md:justify-end flex-wrap font-medium pb-12 text-gray-500">
        <li className="mr-4 md:mx-4 cursor-pointer">All</li>
        <li className="mr-4 md:mx-4 cursor-pointer">Web</li>
        <li className="mr-4 md:mx-4 cursor-pointer">ML/AI</li>
        <li className="mr-4 md:mx-4 cursor-pointer">App</li>
        <li className="mr-4 md:mx-4 cursor-pointer">Game</li>
      </ul>
      <div className="pb-12 relative">
        {nodes && (
          <StackGrid
            columnWidth={responsiveWidthValue}
            monitorImagesLoaded={true}
            gutterWidth={24}
          >
            {nodes.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.frontmatter.title}
                category={item.frontmatter.category}
                className={item.frontmatter.bgColor}
                image={item.frontmatter.thumbnail}
                imageAlt={item.frontmatter.hero_image_alt}
                slug={item.frontmatter.slug}
              />
            ))}
          </StackGrid>
        )}
      </div>
    </Card>
  );
};

export default withSize()(PortfolioPage);

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM, YYYY")
          title
          category
          slug
          bgColor
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="Portfolio" />;
