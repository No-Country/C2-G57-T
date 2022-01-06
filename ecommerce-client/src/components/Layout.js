import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <Outlet />
      {children}

      <footer style={{ marginTop: "40rem" }}>
        <h1>footer</h1>
      </footer>
    </>
  );
};

export default Layout;
