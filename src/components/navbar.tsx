// write a nav bar
import React from "react";

import { Link } from "gatsby";

const Navbar: React.FC = () => {
  return (
    <div className="container">
      <header className="flex justify-between items-center fixed">
        <div className="flex justify-between w-full px-4 lg:px-0">
          <div className="flex justify-between items-center space-x-4 lg-my-8 my-5">
            <Link to="/">Home</Link>
          </div>
          {/* Mobile */}
          <div className="flex items-center">

          </div>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex my-12">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <button>Mode</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
