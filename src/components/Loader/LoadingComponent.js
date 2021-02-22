import React from "react";
import "./LoadingComponent.css";

const LoadingComponent = () => {
  return (
    <div className="w-10 h-10 rounded-full border-0 border-t-2 dark:border-white border-gray-900 animate-spin duration-300" />
  );
};

export default LoadingComponent;
