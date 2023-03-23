import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/card";
import PageTitle from "../components/pageTitle";

const ResumePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Card>
        <div className="py-12">
          <PageTitle text="Resume" />
        </div>
      </Card>
    </Layout>
  );
};

export default ResumePage;

export const Head: HeadFC = () => <title>Resume</title>;
