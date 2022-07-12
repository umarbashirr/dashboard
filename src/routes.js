import React from "react";
const Dashboard = React.lazy(() => import("./pages/dashboard"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", exact: true, name: "Dasboard" },
  { path: "/", exact: true, name: "Home" },
];
