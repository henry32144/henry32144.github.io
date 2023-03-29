import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/card";
import PageTitle from "../components/pageTitle";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Card>
        <div className="py-12">
          <PageTitle text="Contact" />
        </div>
        <div className="lg:flex gap-x-20 py-12">
          <div className="flex flex-wrap p-8 gap-2 bg-violet-100 dark:border-dark-icon-bg rounded-xl">
            <div className="w-8 mt-2"></div>
            <div className="space-y-2">
              <p className="text-xl font-semibold dark:text-white">Email</p>
              <a
                href="mailto:chenghanwu32144@gmail.com"
                className="text-gray-lite text-lg dark:text-[#A6A6A6] "
              >
                chenghanwu32144@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contacts</title>;
