import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useTransition, animated } from "@react-spring/web";

type LayoutProps = {
  children: React.ReactNode;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const Layout: React.FC<LayoutProps> = ({ children, isDark, setIsDark }) => {
  // const transitions = useTransition(children, {
  //   config: { duration: 100 },
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // });
  const transitions = useTransition(children, {
    config: { duration: 100 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  });

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.replace("dark", "light");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    // <div>
    //   {transitions((style, item) => (
    //     <div className="transition-bg-image bg-bgImage dark:bg-darkBgImage bg-cover bg-fixed bg-center bg-no-repeat min-h-screen md:pb-16">
    //       <Navbar isDark={isDark} setIsDark={setIsDark} />
    //       <animated.div style={style}>
    //         <div className="container">
    //           {item}
    //           <Footer></Footer>
    //         </div>
    //       </animated.div>
    //     </div>
    //   ))}
    // </div>
    <div className="transition-bg-image bg-bgImage dark:bg-darkBgImage bg-cover bg-fixed bg-center bg-no-repeat min-h-screen md:pb-16">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <div className="container">
        {children}
        <Footer></Footer>
      </div>
    </div>
    // <div className="transition-bg-image bg-bgImage dark:bg-darkBgImage bg-cover bg-fixed bg-center bg-no-repeat min-h-screen md:pb-16">
    //   <Navbar isDark={isDark} setIsDark={setIsDark} />
    //   {transitions((style, item) => (
    //     <animated.div style={style}>
    //       <div className="container">
    //         {item}
    //         <Footer></Footer>
    //       </div>
    //     </animated.div>
    //   ))}
    // </div>
  );
};

export default Layout;
