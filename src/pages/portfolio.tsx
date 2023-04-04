import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/card";
import PageTitle from "../components/pageTitle";
import Seo from '../components/seo'

const WorkPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Card>
        <div className="py-12">
          <PageTitle text="Portfolio" />
        </div>
        <ul className="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
          <li className="mr-4 md:mx-4 cursor-pointer">
            All
          </li>
          <li className="mr-4 md:mx-4 cursor-pointer">
            Web
          </li>
          <li className="mr-4 md:mx-4 cursor-pointer">
            ML/AI
          </li>
          <li className="mr-4 md:mx-4 cursor-pointer">
            App
          </li>
          <li className="mr-4 md:mx-4 cursor-pointer">
            Game
          </li>
        </ul>
      </Card>
    </Layout>
  );
};

export default WorkPage;

export const Head: HeadFC = () => <Seo title="Portfolio" />;
