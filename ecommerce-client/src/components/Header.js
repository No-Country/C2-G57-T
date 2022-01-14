import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// components
import Sidebar from "./Sidebar";

// images
import logo from '../images/logo.png';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const {pathname} = useLocation()
  useEffect(() => {
    setShowSidebar(false)
  }, [pathname])

  return (
    <>
      <header className='header'>
        <div className="button-burguer" onClick={ () => setShowSidebar(!showSidebar) }>
          <i className="fas fa-bars"></i>
        </div>
        <Link to={'/'}><img src={logo} alt="logo" /></Link>
        <div className="icons-header">
          <div className="icon-search">
            <i className="fas fa-search"></i>
          </div>
          <div className="icon-cart">
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
      </header>
      <div className="preheader">
        <ul>
          <li>
            <Link to={'#'}>INDUMENTARIA</Link>
          </li>
          <li>
            <Link to={'#'}>ACCESORIOS</Link>
          </li>
          <li>
            <Link to={'#'}>PRODUCTOS DESTACADOS</Link>
          </li>
          <li>
            <Link to={'#'}>OFERTA</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={'#'}>INGRESAR</Link>
          </li>
          <li>
            <Link to={'#'}><i className="fas fa-shopping-cart"></i></Link>
          </li>
        </ul>
      </div>

      {showSidebar && <Sidebar />}
    </>
  );
};

export default Header;
