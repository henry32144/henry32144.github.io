import "./src/styles/global.css";
import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import Layout from "./src/components/layout";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
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
  return (
    <Layout isDark={isDark} setIsDark={setIsDark}>
      {element}
    </Layout>
  );
};
