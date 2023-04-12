import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Card from "../components/card";
import PageTitle from "../components/pageTitle";
import Experience from "../components/experience";
import { GiGraduateCap, GiBriefcase } from "react-icons/gi";
import { FaAward, FaCertificate } from "react-icons/fa";
import { Line } from "rc-progress";
import Seo from "../components/seo";
import uciLogo from "../images/uci-logo.png";
import thuLogo from "../images/thu-logo.png";
import courseraLogo from "../images/coursera-logo.png";
import udacityLogo from "../images/udacity-logo.png";
import MCLLogo from "../images/mcl-logo.png";
import MemopressoLogo from "../images/memopresso-logo.png";
import CinnamonAILogo from "../images/cinnamonai-logo.png";

const SkillPill = ({ text }: { text: string }) => {
  return (
    <div className="text-md rounded-lg py-2 px-5 text-stone-600 dark:text-stone-100 bg-stone-100 dark:bg-dark-icon-bg">
      {text}
    </div>
  );
};

const ResumePage: React.FC<PageProps> = () => {
  const [chineseProgress, setChineseProgress] = React.useState(0);
  const [englishProgress, setEnglishProgress] = React.useState(0);
  const [japaneseProgress, setJapaneseProgress] = React.useState(0);

  React.useEffect(() => {
    const timeout1 = setTimeout(() => {
      setChineseProgress(100);
    }, 300);
    const timeout2 = setTimeout(() => {
      setEnglishProgress(85);
    }, 400);
    const timeout3 = setTimeout(() => {
      setJapaneseProgress(60);
    }, 500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);
  
  return (
    <Card>
      <div className="py-12">
        <PageTitle text="Resume" />
      </div>
      <div className="pb-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <h3 className="dark:text-white relative inline-block text-3xl font-semibold pb-5">
              Skills
            </h3>
            <ul className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
              <li>
                <SkillPill text="Python" />
              </li>
              <li>
                <SkillPill text="JavaScript/Typescript" />
              </li>
              <li>
                <SkillPill text="Java" />
              </li>
              <li>
                <SkillPill text="SQL" />
              </li>
              <li>
                <SkillPill text="C++" />
              </li>
              <li>
                <SkillPill text="HTML" />
              </li>
              <li>
                <SkillPill text="CSS" />
              </li>
              <li>
                <SkillPill text="Go" />
              </li>
              <li>
                <SkillPill text="ReactJS" />
              </li>
              <li>
                <SkillPill text="NodeJS" />
              </li>
              <li>
                <SkillPill text="Git" />
              </li>
              <li>
                <SkillPill text="GCP" />
              </li>
              <li>
                <SkillPill text="AWS" />
              </li>
              <li>
                <SkillPill text="Linux" />
              </li>
              <li>
                <SkillPill text="Docker" />
              </li>
              <li>
                <SkillPill text="Flask" />
              </li>
              <li>
                <SkillPill text="REST API" />
              </li>
              <li>
                <SkillPill text="Scrum" />
              </li>
              <li>
                <SkillPill text="Object Oriented Design" />
              </li>
              <li>
                <SkillPill text="MongoDB" />
              </li>
              <li>
                <SkillPill text="PostgreSQL" />
              </li>
              <li>
                <SkillPill text="Jira" />
              </li>
              <li>
                <SkillPill text="Keras" />
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h3 className="dark:text-white relative inline-block text-3xl font-semibold pb-5">
              Languages
            </h3>
            <div className="flex flex-col gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
              <div className="mb-7">
                <div className="flex justify-between py-1">
                  <span className="text-base text-gray-700 font-semibold dark:text-gray-400">
                    Chinese
                  </span>
                  <span className="text-base text-gray-700 font-semibold dark:text-gray-400 pr-5">
                    Native
                  </span>
                </div>
                <Line
                  percent={chineseProgress}
                  strokeColor="rgb(168 85 247)"
                  style={{ transition: "1s ease", transitionDelay: "0.5s" }}
                />
              </div>
              <div className="mb-7">
                <div className="flex justify-between py-1">
                  <span className="text-base text-gray-700 font-semibold dark:text-gray-400">
                    English
                  </span>
                  <span className="text-base text-gray-700 font-semibold dark:text-gray-400 pr-5">
                    Fluent
                  </span>
                </div>
                <Line
                  percent={englishProgress}
                  strokeColor="rgb(255, 100, 100)"
                />
              </div>
              <div className="mb-7">
                <div className="flex justify-between py-1">
                  <span className="text-base text-gray-700 font-semibold dark:text-gray-400">
                    Japanese
                  </span>
                  <span className="text-base text-gray-700 font-semibold dark:text-gray-400 pr-5">
                    Intermediate
                  </span>
                </div>
                <Line
                  percent={japaneseProgress}
                  strokeColor="rgb(14 165 233)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-12">
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
    </Card>
  );
};

export default ResumePage;

export const Head: HeadFC = () => <Seo title="Resume" />;
