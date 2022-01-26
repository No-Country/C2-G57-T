import React from "react";
import { Link, useLocation } from "react-router-dom";

export const PageFinish = () => {
  const { pathname } = useLocation();

  return (
    <div className="containerfinish">
      {pathname === "/cancel" ? 
      
      ( <div className="cancell"> <h1 className="bounce-top">CANCELASTE TU COMPRA</h1> </div> ) 
      :
       ( <div className="cancell"> <h1 className="bounce-top">¡GRACIAS POR TU COMPRA!</h1> </div>) }
      <Link to='/'>
        <button className="generalButton">Volver a la tienda</button>
      </Link>
    </div>
  );
};
