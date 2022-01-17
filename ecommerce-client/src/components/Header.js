import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

// components
import Sidebar from "./Sidebar";

// images
//import logo from "../images/logo.png";
import { CartDetailModal } from "./cart/CartDetailModal";
import { CartData } from "../cartContext/Cartcontext";

const Header = () => {
  
  const {showOpenModalCart, setShowOpenModalCart, state } = useContext(CartData)
  const [showSidebar, setShowSidebar] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setShowSidebar(false);
  }, [pathname]);
  useEffect(() => {
    setShowOpenModalCart(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSidebar]);

  return (
    <>
    <div className="header-fix">
      <header> 
        <div
          className='button-burguer'
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <i className='fas fa-bars'></i>
        </div>
        <Link to={"/"}>
          {/* <img src={logo} alt='logo' /> */}
          <span>Mujeres Reales</span>
        </Link>
        <div className='icons-header'>
      
          <div className='icon-cart'>
            <i
              className='fas fa-shopping-bag'
              onClick={() => setShowOpenModalCart(!showOpenModalCart)}
            >
              <div className='icon-number'>
                <span>{state.quantityArticles}</span>
              </div>
            </i>
          </div>
        </div>
      </header>
    </div>

      <Sidebar sidebar={showSidebar}/>
      {showOpenModalCart && <CartDetailModal />}
    </>
  );
};

export default Header;
