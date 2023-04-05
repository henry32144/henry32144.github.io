import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import Card from "../../components/card";
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
      };
    };
  };
};

const Project: React.FC<ProjectPageProps> = ({ data, children }) => {
  React.useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Card>
      <div className="py-12">
        <PageTitle text="Project" />
      </div>
      {children}
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
