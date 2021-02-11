import React from "react";
import PropTypes from "prop-types";
import "./Layout.css";
import Sidebar from "../Sidebar/Sidebar";
import Player from "../Player/Player";
import LoginModal from "../LoginModal/LoginModal";
import useAuthStore from "../../stores/useAuthStore";
import useAppStore from "../../stores/useAppStore";
import Loader from "../../icons/Loader";

const authSelector = (state) => state.isAuthenticated;
const isUpdatingSelector = (state) => state.isUpdating;

const Layout = ({ children }) => {
  const isAuthenticated = useAuthStore(authSelector);
  const isUpdating = useAppStore(isUpdatingSelector);
  return (
    <>
      <div className="layout h-screen flex">
        <Sidebar />
        <div className="content w-full">{children}</div>
      </div>
      <Player />
      {!isAuthenticated && <LoginModal />}
      {isUpdating && <Loader />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
