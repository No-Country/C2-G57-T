import React from "react";
import { Link, useLocation } from "react-router-dom";

export const PageFinish = () => {
  const { pathname } = useLocation();

  return (
    <div >
      {pathname === "/cancel" ? 
      
      (<h1>CANCELASTE TU COMPRA</h1>) 
      :
       ( <h1>¡GRACIAS POR TU COMPRA!</h1>)}
      <Link to='/'>
        <button className="generalButton">Volver a la tienda</button>
      </Link>
    </div>
  );
};
