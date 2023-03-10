import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/card";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Card>
        <div className="py-12">
          <h1
            className="dark:text-white relative inline-block text-3xl font-bold after:content-[''] after:left-52 after:w-[13rem] after:h-0.5 \
            after:absolute after:top-[50%] after:rounded-md after:bg-gradient-to-r after:from-indigo-500 after:to-violet-500 \
            "
          >
            About me
          </h1>
        </div>
      </Card>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About</title>;
