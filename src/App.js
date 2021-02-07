import React from "react";
import Content from "./components/Content/Content";
import Layout from "./components/Layout/Layout";
import { useTheme } from "./hooks/useTheme";

function App() {
  useTheme();
  return (
    <div>
      <div className="h-screen w-full dark:bg-themeGray transition">
        <Layout>
          <Content />
        </Layout>
      </div>
    </div>
  );
}

export default App;
