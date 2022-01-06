import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header className='header'>
        <div className='container header__container'>
          <i
            className='fas fa-bars'
            onClick={() => setShowSidebar(!showSidebar)}
          ></i>

          <div>
            <h1>Aca Logo!!!!</h1>
          </div>

          <i className='fas fa-search'></i>
          <i className='fas fa-shopping-cart'></i>
        </div>
      </header>

      {showSidebar && <Sidebar />}
    </>
  );
};

export default Header;
