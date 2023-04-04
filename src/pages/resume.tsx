import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/card";
import PageTitle from "../components/pageTitle";
import Experience from "../components/experience";
import { GiGraduateCap, GiBriefcase } from "react-icons/gi";
import { FaAward, FaCertificate } from "react-icons/fa";
import Seo from '../components/seo'

import uciLogo from "../images/uci-logo.png";
import thuLogo from "../images/thu-logo.png";
import courseraLogo from "../images/coursera-logo.png";
import udacityLogo from "../images/udacity-logo.png";
import MCLLogo from "../images/mcl-logo.png";
import MemopressoLogo from "../images/memopresso-logo.png";
import CinnamonAILogo from "../images/cinnamonai-logo.png";

const ResumePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Card>
        <div className="py-12">
          <PageTitle text="Resume" />
        </div>
        <div className="pb-12">
          <div className="flex flex-col">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-6">
                <div className="flex items-center space-x-3 mb-4">
                  <GiGraduateCap className="text-indigo-500" size={30} />
                  <span className="text-3xl font-medium dark:text-white">
                    Education
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <Experience
                    title="Master of Computer Science"
                    date="2021 Sep - 2022 Dec"
                    institution="University of California Irvine, USA"
                    logo={uciLogo}
                    bgColor="bg-blue-50"
                  />
                  <Experience
                    title="B.E. in Computer Science"
                    date="2015 Sep - 2019 Jun"
                    institution="Tunghai University, Taiwan"
                    logo={thuLogo}
                    bgColor="bg-blue-50"
                  />
                  <Experience
                    title="Deep Learning Specialization"
                    date="2019 Jun"
                    institution="deeplearning.ai, Coursera (Online Learning)"
                    logo={courseraLogo}
                    bgColor="bg-blue-50"
                  />
                  <Experience
                    title="Deep Reinforcement Learning Nanodegree"
                    date="2019 May"
                    institution="Udacity (Online Learning)"
                    logo={udacityLogo}
                    bgColor="bg-blue-50"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex items-center space-x-3 mb-4">
                  <GiBriefcase className="text-indigo-500" size={30} />
                  <span className="text-3xl font-medium dark:text-white">
                    Experience
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <Experience
                    title="Software Engineering Intern"
                    date="2022 Jun - 2022 Dec, 7 months"
                    institution="MyCareLinq Inc, USA"
                    logo={MCLLogo}
                    bgColor="bg-orange-50"
                  />
                  <Experience
                    title="Frontend Engineering Intern"
                    date="2020 Oct - 2021 Mar, 6 months"
                    institution="Memopresso Inc, Taiwan"
                    logo={MemopressoLogo}
                    bgColor="bg-orange-50"
                  />
                  <Experience
                    title="AI BootCamp Participant"
                    date="2020 Jul - 2020 Aug, 2 months"
                    institution="Cinnamon AI, Taiwan"
                    logo={CinnamonAILogo}
                    bgColor="bg-orange-50"
                  />
                  <Experience
                    title="Freelance Software Engineer"
                    date="2018 Nov - 2019 Feb, 4 months"
                    institution="Fullway communication ltd, Taiwan"
                    bgColor="bg-orange-50"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FaAward className="text-indigo-500" size={30} />
                  <span className="text-3xl font-medium dark:text-white">
                    Awards
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <Experience
                    title="1st Place, MVP launch competition"
                    date="2020 Aug"
                    institution="Cinnamon AI"
                    bgColor="bg-amber-50"
                  />
                  <Experience
                    title="Honorable Mention, Artificial Intelligence Cup Award"
                    date="2019 Mar"
                    institution="Ministry of Education, Taiwan"
                    bgColor="bg-amber-50"
                  />
                  <Experience
                    title="Honorable Mention, Graduation Thematic Competition"
                    date="2019 Mar"
                    institution="Tunghai University"
                    bgColor="bg-amber-50"
                  />
                  <Experience
                    title="2nd Place, Academic Achievement Award"
                    date="2018 Jun"
                    institution="Tunghai University"
                    bgColor="bg-amber-50"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FaAward className="text-indigo-500" size={30} />
                  <span className="text-3xl font-medium dark:text-white">
                    Certifications
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <Experience
                    title="AWS Certified Cloud Practitioner"
                    date="2022 Dec"
                    institution="Amazon Web Services"
                    bgColor="bg-emerald-50"
                  />
                  <Experience
                    title="Japanese Language Proficiency Test N1"
                    date="2021 Jan"
                    institution="Japan Foundation and Japan Educational Exchanges and
                    Services"
                    bgColor="bg-emerald-50"
                  />
                  <Experience
                    title="TOEFL iBT 106"
                    date="2019 Oct"
                    institution="ETS"
                    bgColor="bg-emerald-50"
                  />
                  <Experience
                    title="GRE 326"
                    date="2019 Aug"
                    institution="ETS"
                    bgColor="bg-emerald-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default ResumePage;

export const Head: HeadFC = () => <Seo title="Resume" />;
