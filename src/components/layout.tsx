import * as React from "react";
import Navbar from "./navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-bgImage bg-cover bg-fixed bg-center bg-no-repeat min-h-screen">
      <Navbar />
      <main>
        <div className="container">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
