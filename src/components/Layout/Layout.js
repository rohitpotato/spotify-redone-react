import React from "react";
import PropTypes from "prop-types";
import "./Layout.css";
import Sidebar from "../Sidebar/Sidebar";
import Player from "../Player/Player";
import LoginModal from "../LoginModal/LoginModal";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout h-screen flex">
        <Sidebar />
        <div className="content w-full px-8 py-8">{children}</div>
      </div>
      <Player />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
