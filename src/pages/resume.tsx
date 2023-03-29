import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/card";
import PageTitle from "../components/pageTitle";
import { GiGraduateCap, GiBriefcase } from "react-icons/gi";
import { FaAward, FaCertificate } from "react-icons/fa";
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
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-blue-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2021 Sep - 2022 Dec
                      </span>
                      <span className="text-xl font-semibold">
                        Master of Computer Science{" "}
                      </span>
                      <span className="text-base">
                        University of California Irvine, USA
                      </span>
                    </div>
                    <div className="ml-auto md:flex flex-col flex-grow-0 items-center justify-center hidden dark:hidden">
                      <img className="h-[80px]" src={uciLogo} />
                    </div>
                  </div>
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-blue-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2015 Sep - 2019 Jun
                      </span>
                      <span className="text-xl font-semibold">
                        B.E. in Computer Science{" "}
                      </span>
                      <span className="text-base">
                        TungHai University, Taiwan
                      </span>
                    </div>
                    <div className="ml-auto md:flex flex-col flex-grow-0 items-center justify-center hidden dark:hidden">
                      <img className="h-[80px]" src={thuLogo} />
                    </div>
                  </div>
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-blue-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">2019</span>
                      <span className="text-xl font-semibold">
                        Deep Learning Specialization
                      </span>
                      <span className="text-base">
                        deeplearning.ai, Coursera (Online Learning)
                      </span>
                    </div>
                    <div className="ml-auto md:flex flex-col flex-grow-0 items-center justify-center hidden dark:hidden">
                      <img className="h-[80px]" src={courseraLogo} />
                    </div>
                  </div>
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-blue-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2018 - 2019
                      </span>
                      <span className="text-xl font-semibold">
                        Deep Reinforcement Learning Nanodegree
                      </span>
                      <span className="text-base">
                        Udacity (Online Learning)
                      </span>
                    </div>
                    <div className="ml-auto md:flex flex-col flex-grow-0 items-center justify-center hidden dark:hidden">
                      <img className="h-[80px]" src={udacityLogo} />
                    </div>
                  </div>
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
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-orange-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2022 Jun - 2022 Dec, 7 months
                      </span>
                      <span className="text-xl font-semibold">
                        Software Engineering Intern
                      </span>
                      <span className="text-base">MyCareLinq Inc, USA</span>
                    </div>
                    <div className="ml-auto md:flex flex-col flex-grow-0 items-center justify-center hidden dark:hidden">
                      <img className="h-[80px]" src={MCLLogo} />
                    </div>
                  </div>
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-orange-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2020 Oct - 2021 Mar, 6 months
                      </span>
                      <span className="text-xl font-semibold">
                        Frontend Engineering Intern
                      </span>
                      <span className="text-base">Memopresso Inc, Taiwan</span>
                    </div>
                    <div className="ml-auto md:flex flex-col flex-grow-0 items-center justify-center hidden dark:hidden">
                      <img className="h-[80px]" src={MemopressoLogo} />
                    </div>
                  </div>
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-orange-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2020 Jul - 2020 Aug, 2 months
                      </span>
                      <span className="text-xl font-semibold">
                        AI BootCamp Participant
                      </span>
                      <span className="text-base">Cinnamon AI, Taiwan</span>
                    </div>
                    <div className="ml-auto md:flex flex-col flex-grow-0 items-center justify-center hidden dark:hidden">
                      <img className="h-[80px]" src={CinnamonAILogo} />
                    </div>
                  </div>
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-orange-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2018 Nov - 2019 Feb, 4 months
                      </span>
                      <span className="text-xl font-semibold">
                        Freelance Software Engineer
                      </span>
                      <span className="text-base">
                        Fullway communication ltd, Taiwan
                      </span>
                    </div>
                  </div>
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
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-amber-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2020 Aug
                      </span>
                      <span className="text-xl font-semibold">
                        1st Place, MVP launch competition
                      </span>
                      <span className="text-base">Cinnamon AI</span>
                    </div>
                  </div>
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-amber-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2019 Mar
                      </span>
                      <span className="text-xl font-semibold">
                        Honorable Mention, Artificial Intelligence Cup Award
                      </span>
                      <span className="text-base">
                        Ministry of Education, Taiwan
                      </span>
                    </div>
                  </div>
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-amber-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">2019</span>
                      <span className="text-xl font-semibold">
                        Honorable Mention, Graduation Thematic Competition
                      </span>
                      <span className="text-base">Tunghai University</span>
                    </div>
                  </div>
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-amber-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">2018</span>
                      <span className="text-xl font-semibold">
                        2nd Place, Academic Achievement Award
                      </span>
                      <span className="text-base">Tunghai University</span>
                    </div>
                  </div>
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
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-emerald-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2022 Dec
                      </span>
                      <span className="text-xl font-semibold">
                        AWS Certified Cloud Practitioner
                      </span>
                      <span className="text-base">Amazon Web Services</span>
                    </div>
                  </div>
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-emerald-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2021 Jan
                      </span>
                      <span className="text-xl font-semibold">
                        Japanese Language Proficiency Test N1
                      </span>
                      <span className="text-base">
                        Japan Foundation and Japan Educational Exchanges and
                        Services
                      </span>
                    </div>
                  </div>
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-emerald-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2019 Oct
                      </span>
                      <span className="text-xl font-semibold">
                        TOEFL iBT 106
                      </span>
                      <span className="text-base">
                        ETS
                      </span>
                    </div>
                  </div>
                  <div className="flex rounded-xl p-6 dark:border-dark-icon-bg dark:border-2 dark:text-white dark:bg-transparent bg-emerald-50">
                    <div className="flex flex-col flex-1">
                      <span className="text-sm text-gray-500 mb-1">
                        2019 Aug
                      </span>
                      <span className="text-xl font-semibold">GRE 326</span>
                      <span className="text-base">
                        ETS
                      </span>
                    </div>
                  </div>
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

export const Head: HeadFC = () => <title>Resume</title>;
