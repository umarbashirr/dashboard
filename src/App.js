import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";

// Main Pages
const Dashboard = lazy(() => import("./pages/dashboard"));
const Users = lazy(() => import("./pages/users"));
const PageNotFound = lazy(() => import("./pages/pagenotfound"));

function App() {
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
