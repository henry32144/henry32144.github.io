import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import Card from "../components/card";
import PageTitle from "../components/pageTitle";
import Seo from "../components/seo";
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
    console.log(size);
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
      <div className="py-12">
        <StackGrid columnWidth={responsiveWidthValue}>
          {nodes.map((item) => (
            <div
              key={item.id}
              className="rounded-lg p-6 dark:border-[2px] border-[#212425] dark:bg-transparent bg-sky-200 cursor-pointer transition duration-200 ease-in-out transform hover:scale-105"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={tempImage}
                  className="w-full rounded-lg h-auto "
                ></img>
              </div>
              <span className="pt-5 text-[14px] font-normal text-gray-500 block dark:text-[#A6A6A6]">
                Test
              </span>
              <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-indigo-500 dark:hover:text-indigo-500 dark:text-white mt-2">
                Project Title
              </h2>
            </div>
          ))}
        </StackGrid>
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
        }
        id
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="Portfolio" />;
