import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-bgImage dark:bg-darkBgImage bg-cover bg-fixed bg-center bg-no-repeat min-h-screen md:pb-16">
      <Navbar />
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
