import React from "react";
import { Outlet } from "react-router-dom";

const Dress = () => {
  return (
    <div className='container__page'>
      <div className='container-dress'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dress;
