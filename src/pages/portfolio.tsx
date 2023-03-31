import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/card";
import PageTitle from "../components/pageTitle";

const WorkPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Card>
        <div className="py-12">
          <PageTitle text="Portfolio" />
        </div>
      </Card>
    </Layout>
  );
};

export default WorkPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
