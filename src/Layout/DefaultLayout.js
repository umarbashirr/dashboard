import React from "react";
import { Outlet } from "react-router-dom";
import AppSidebar from "../components/AppSidebar";

const DefaultLayout = () => {
  return (
    <div className="bg-light-gray min-h-screen flex p-5">
      <AppSidebar />
      <div>
        <div>Header</div>
        <Outlet />
        <div>Footer</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
