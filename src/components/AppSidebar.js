import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa";

const AppSidebar = () => {
  const styles = {
    sidebar:
      "bg-white w-64 fixed bottom-5 top-5 rounded-xl bg-gradient-to-t from-light-dark to-high-dark",
  };

  return (
    <div className={styles.sidebar}>
      <div className="logo-container py-6 px-8 text-white text-sm">
        Cool Admin Panel
      </div>
      <div className="w-full flex flex-col gap-3">
        <NavLink
          to="/"
          className="mx-4 py-3 px-4 text-white bg-[hsla(0,0%,78%,.2)] rounded flex items-center justify-start gap-3"
        >
          <span>
            <FaHome />
          </span>
          Dashboard
        </NavLink>
        <NavLink
          to="/"
          className="mx-4 py-3 px-4 text-white bg-[hsla(0,0%,78%,.2)] rounded flex items-center justify-start gap-3"
        >
          <span>
            <FaUsers />
          </span>
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AppSidebar;
