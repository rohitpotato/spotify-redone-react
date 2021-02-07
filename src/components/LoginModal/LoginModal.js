import React from "react";
import "./LoginModal.css";
import { getDayMessasge } from "../../utils/getDayMessage";

const LoginModal = () => {
  return (
    <div className="h-screen w-full login-modal flex items-center justify-center">
      <div className="bg-white dark:bg-themeGray dark:text-white rounded-md shadow-xl z-10 p-12 absolute text-center">
        <div className="font-bold lg:text-6xl text-4xl tracking-wider">
          {getDayMessasge()}!
        </div>
        <div className="py-4">
          <span className="font-semibold tracking-wide lg:text-lg md:text-base">
            Login with spotify to continue
          </span>
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="focus:outline-none px-8 py-4 rounded-md tracking-widest text-sm uppercase font-semibold bg-black dark:bg-white text-white dark:text-black shadow-2xl"
          >
            Lets go
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
