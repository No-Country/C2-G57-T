import React from "react";
import { Link, useLocation } from "react-router-dom";

export const PageFinish = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/cancel" ? (
        <p>Cancelaste tu compra</p>
      ) : (
        <p>Gracias por tu compra!</p>
      )}
      <Link to='/'>
        <button>Volver a la tienda</button>
      </Link>
    </div>
  );
};
