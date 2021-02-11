import React from "react";
import Content from "./components/Content/Content";
import Layout from "./components/Layout/Layout";
import { useTheme } from "./hooks/useTheme";
import useLogin from "./hooks/useLogin";

function App() {
  useTheme();
  useLogin();

  return (
    <div>
      <div className="h-screen w-full dark:bg-themeGray transition font-lato">
        <Layout>
          <Content />
        </Layout>
      </div>
    </div>
  );
}

export default App;
