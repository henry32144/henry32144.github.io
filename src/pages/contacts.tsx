import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Card from "../components/card";
import PageTitle from "../components/pageTitle";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Seo from "../components/seo";
import tempImage from "../images/sky.jpg";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Card>
      <div className="py-12">
        <PageTitle text="Contact" />
      </div>
      <div className="lg:flex gap-x-10 pb-12">
        <div className="w-full flex gap-4">
          <div className="flex p-8 gap-2 bg-violet-100 dark:border-dark-icon-bg rounded-xl dark:bg-neutral-700">
            <div className="mt-2">
              <AiOutlineMail
                size={26}
                className="text-violet-700 dark:text-violet-400"
              />
            </div>
            <div>
              <p className="text-xl font-bold dark:text-white">Email:</p>
              <div className="mt-2">
                <a
                  href="mailto:chenghanwu32144@gmail.com"
                  className="text-gray-lite text-lg dark:text-[#A6A6A6]"
                >
                  chenghanwu32144@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex p-8 gap-2 bg-rose-100 dark:border-dark-icon-bg rounded-xl dark:bg-neutral-700">
            <div className="mt-2">
              <MdLocationOn
                size={26}
                className="text-rose-700 dark:text-rose-400"
              />
            </div>
            <div>
              <p className="text-xl font-bold dark:text-white">Location:</p>
              <div className="mt-2">
                <p className="text-gray-lite text-lg dark:text-[#A6A6A6] mt-2">
                  Southern California, USA
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
            <div className="dark:border-dark-icon-bg dark:border-2 md:p-[48px] p-4 bg-gray-300 rounded-xl mb-[30px] md:mb-[60px] dark:bg-[#111111]">
              <h3 className="text-2xl ">
                <span className="text-gray-lite dark:text-[#A6A6A6] ">
                  Feel free to reach out to me. I'm always open to discussing
                  product{" "}
                </span>
                <span className="font-semibold dark:text-white">
                  development or partnerships.
                </span>
              </h3>
            </div>
          </div> */}
      </div>
      <div className="pb-12">
        <img
          loading="lazy"
          alt="Beautiful sky photo in LA"
          className="w-full object-cover overflow-hidden rounded-xl mb-3 md:mb-0"
          src={tempImage}
        ></img>
        <div className="footer py-1 text-center text-gray-500">
          <p>Beautiful sky in South california!</p>
        </div>
      </div>
    </Card>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <Seo title="Contacts" />;
