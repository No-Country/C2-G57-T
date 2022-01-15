import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Dress = () => {
  return (
    <div className='container__page'>
      <div className="container-dress">       
        <Outlet />
      </div>
    </div>
  );
};

export default Dress;
