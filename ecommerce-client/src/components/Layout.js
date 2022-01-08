import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <Outlet />
      {children}

      <footer>
        <h1>footer</h1>
      </footer>
    </>
  );
};

export default Layout;
