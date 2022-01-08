import React, { useState } from "react";
import Sidebar from "./Sidebar";

// images
import logo from '../images/logo.png';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header className='header'>
        <div className="button-burguer" onClick={ () => setShowSidebar(!showSidebar) }>
          <i className="fas fa-bars"></i>
        </div>
        <img src={logo} alt="logo" />
        <div className="icons-header">
          <div className="icon-search">
            <i className="fas fa-search"></i>
          </div>
          <div className="icon-cart">
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
      </header>

      {showSidebar && <Sidebar />}
    </>
  );
};

export default Header;
