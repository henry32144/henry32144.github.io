import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/card";
import PersonalInfoCard from "../components/personalInfoCard";
import WhatIDoCard from "../components/whatIDoCard";
import tempImage from "../images/background.jpg";
import { MdEmail, MdLocationPin, MdWeb } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillCalendar,
  AiFillRobot,
  AiFillCloud,
} from "react-icons/ai";
import { FaServer } from "react-icons/fa";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Card>
        <div className="py-12">
          <h2
            className="dark:text-white relative inline-block text-4xl font-bold after:content-[''] after:left-48 after:w-[13rem] after:h-0.5 \
            after:absolute after:top-[50%] after:rounded-md after:bg-gradient-to-r after:from-indigo-500 after:to-violet-500 \
            "
          >
            About Me
          </h2>
          <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
            <div className="col-span-12 md:col-span-4">
              <img
                loading="lazy"
                className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                src={tempImage}
              ></img>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-2.5">
              <div className="md:mr-12 xl:mr-16">
                <h4 className="text-2xl font-medium mb-2.5 dark:text-white">
                  Who am I?
                </h4>
                <p className="text-gray-500 text-lg dark:text-gray-400 leading-7">
                  As a recent graduate with experience in fullstack development,
                  cloud application, and machine learning, I am a software
                  engineer with a passion for solving complex problems and am
                  always willing to take on new challenges to expand my skills.
                </p>
                <p className="text-gray-500 text-lg dark:text-gray-400 leading-7 mt-2.5">
                  With a strong focus on user-centered design, my goal is to
                  creating products that people love.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium my-5 dark:text-white">
                  Personal Info
                </h2>
                <div className="grid grid-cols-12 gap-6">
                  <div className="flex col-span-12 sm:col-span-6">
                    <PersonalInfoCard
                      icon={
                        <span className="p-1 text-[#2d64bc] dark:bg-dark-icon-bg mr-2.5 shadow-md flex items-center justify-center rounded-md w-12 h-12">
                          <AiFillLinkedin size={26} />
                        </span>
                      }
                      label="LinkedIn"
                      content={
                        <a
                          className="hover:text-indigo-500 duration-300 transition"
                          href="https://www.linkedin.com/in/cheng-han-wu-0803/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          cheng-han-wu-0803
                        </a>
                      }
                    />
                  </div>
                  <div className="flex col-span-12 sm:col-span-6">
                    <PersonalInfoCard
                      icon={
                        <span className="p-1 text-rose-600 dark:text-rose-600 shadow-md dark:bg-dark-icon-bg mr-2.5 flex items-center justify-center rounded-md w-12 h-12">
                          <MdLocationPin size={26} />
                        </span>
                      }
                      label="Location"
                      content="California, USA"
                    />
                  </div>
                  <div className="flex col-span-12 sm:col-span-6">
                    <PersonalInfoCard
                      icon={
                        <span className="p-1 text-emerald-500 dark:text-emerald-600 shadow-md dark:bg-dark-icon-bg mr-2.5 flex items-center justify-center rounded-md w-12 h-12">
                          <MdEmail size={26} />
                        </span>
                      }
                      label="Gmail"
                      content={
                        <a
                          className="hover:text-indigo-500 duration-300 transition "
                          href="mailto:chenghanwu32144@gmail.com"
                        >
                          chenghanwu32144
                        </a>
                      }
                    />
                  </div>
                  <div className="flex col-span-12 sm:col-span-6">
                    <PersonalInfoCard
                      icon={
                        <span className="p-1 text-purple-600 dark:text-purple-600 shadow-md dark:bg-dark-icon-bg mr-2.5 flex items-center justify-center rounded-md w-12 h-12">
                          <AiFillCalendar size={26} />
                        </span>
                      }
                      label="Birthday"
                      content="Aug 03, 1997"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-12">
          <h3 className="dark:text-white relative inline-block text-3xl font-semibold pb-5">
            What I do
          </h3>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
            <WhatIDoCard
              icon={
                <MdWeb
                  className="text-orange-500 min-w-[40px] min-h-[40px]"
                  size={40}
                />
              }
              title="Frontend Development"
              description="Using tools like React.js, HTML, CSS, and JavaScript, I have the skills to create responsive and dynamic websites that are optimized for desktop and mobile devices."
              bgColor="bg-orange-50"
            />
            <WhatIDoCard
              icon={
                <FaServer
                  className="text-yellow-500 min-w-[40px] min-h-[40px]"
                  size={40}
                />
              }
              title="Backend Development"
              description="Using languages like Python, Node.js, and Go, I can build RESTful APIs, database schemas, and server-side logic to power web apps."
              bgColor="bg-yellow-50"
            />
            <WhatIDoCard
              icon={
                <AiFillCloud
                  className="text-green-500 min-w-[40px] min-h-[40px]"
                  size={40}
                />
              }
              title="Cloud Application"
              description="With experience in platforms like AWS, Azure, and Google Cloud, I can create architectures that leverage the power of cloud computing and containerization to deliver fast and efficient services."
              bgColor="bg-green-50"
            />
            <WhatIDoCard
              icon={
                <AiFillRobot
                  className="text-sky-500 min-w-[40px] min-h-[40px]"
                  size={40}
                />
              }
              title="ML/AI Application"
              description="I can build intelligent systems that can automate tasks, make predictions, and gain insights from data leverage the power of machine learning and artificial intelligence."
              bgColor="bg-sky-50"
            />
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About</title>;
