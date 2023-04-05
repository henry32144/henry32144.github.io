import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    <div className="bg-bgImage dark:bg-darkBgImage bg-cover bg-fixed bg-center bg-no-repeat min-h-screen md:pb-16">
      <Navbar 
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <main>
        <div className="container">
          {children}
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
};

export default Layout;
