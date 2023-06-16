import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useTransition, animated } from "@react-spring/web";
import { useCallback, useEffect, useState } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { lightParticles, darkParticles } from "../utils/particles";
import bgImage from "../images/background.jpg";

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
  // const transitions = useTransition(children, {
  //   config: { duration: 100 },
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   exitBeforeEnter: true,
  // });

  React.useLayoutEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.replace("dark", "light");
      localStorage.theme = "light";
    }
  }, [isDark]);

  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

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
    <div className="dark:bg-neutral-900 min-h-screen md:pb-16">
      {!isDark && (
        <Particles
          id="tsparticles-light"
          init={particlesInit}
          loaded={particlesLoaded}
          options={lightParticles}
        />
      )}
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <div>
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
