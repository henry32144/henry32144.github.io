import * as React from "react";

type PageTitleProps = {
  text: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <h2
      className="mt-24 lg:mt-0 dark:text-white relative inline-block text-4xl font-bold after:content-[''] after:left-48 after:md:w-[13rem] after:h-0.5 \
            after:absolute after:top-[50%] after:rounded-md after:bg-gradient-to-r after:from-indigo-500 after:to-violet-500 \
            "
    >
      {text}
    </h2>
  );
};

// Export the component
export default PageTitle;
