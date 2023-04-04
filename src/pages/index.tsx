import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Avatar from "../components/avatar";
import AvatarImage from "../images/avatar.jpg";
import SnsButton from "../components/snsButton";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";
import { SiIndeed } from "react-icons/si";
import resume from "../downloads/resume.pdf";
import Seo from '../components/seo'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[70vh] flex flex-col items-center justify-center">
        <Avatar className="w-[240px] h-[240px]" src={AvatarImage}></Avatar>
        <h1 className="mt-6 mb-2 text-3xl font-semibold dark:text-white">
          Cheng-Han Wu
        </h1>
        <h2 className="mb-4 text-lg text-gray-500">Software Engineer</h2>
        <div className="flex gap-3 mb-6">
          <SnsButton
            className="text-[#2d64bc] w-[40px] h-[40px] justify-center items-center rounded-lg"
            to="https://www.linkedin.com/in/cheng-han-wu-0803/"
            icon={<AiFillLinkedin className="w-[20px] h-[20px]" />}
          />
          <SnsButton
            className="w-[40px] h-[40px] justify-center items-center rounded-lg"
            to="https://github.com/henry32144/"
            icon={<AiFillGithub className="w-[20px] h-[20px]" />}
          />
          <SnsButton
            className="text-[#153995] w-[40px] h-[40px] justify-center items-center rounded-lg"
            to="https://my.indeed.com/p/chenghanw-xg7y75x/"
            icon={<SiIndeed className="w-[20px] h-[20px]" />}
          />
        </div>
        <a
          className="flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 \
            duration-200 transition ease-linear hover:bg-gradient-to-l from-violet-500 to-indigo-500 \
            px-8 py-3 text-lg text-white rounded-[35px]"
          href={resume}
          download
        >
          <AiOutlineDownload className="w-[24px] h-[24px]" />
          Resume.pdf
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
