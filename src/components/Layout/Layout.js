import React from "react";
import PropTypes from "prop-types";
import "./Layout.css";
import Sidebar from "../Sidebar/Sidebar";
import Player from "../Player/Player";
import LoginModal from "../LoginModal/LoginModal";
import useAuthStore from "../../stores/useAuthStore";

const authSelector = (state) => state.isAuthenticated;

const Layout = ({ children }) => {
  const isAuthenticated = useAuthStore(authSelector);
  return (
    <>
      <div className="layout h-screen flex">
        <Sidebar />
        <div className="content w-full px-8 py-8">{children}</div>
      </div>
      <Player />
      {!isAuthenticated && <LoginModal />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
