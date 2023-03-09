import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/card";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Card className="text-3xl font-bold">Home!</Card>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
