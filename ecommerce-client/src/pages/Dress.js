import React from "react";
import { Outlet } from "react-router-dom";

const Dress = () => {
  return (
    <div className='container__page'>
      <Outlet />
    </div>
  );
};

export default Dress;
