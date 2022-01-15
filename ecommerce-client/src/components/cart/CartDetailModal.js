import React, { useContext } from "react";
import { CartData } from "../../cartContext/Cartcontext";
import { CardProductCart } from "./CardProductCart";

export const CartDetailModal = () => {
  const { state, setShowOpenModalCart } = useContext(CartData);

  return (
    <div className='CartModal'>
      <div className='CartModal__flex'>
        <h1 className='CartModal__title'>CARRITO</h1>
        <button
          className='CartModal__button'
          onClick={() => setShowOpenModalCart(false)}
        >
          Cerrar Carrito
        </button>
      </div>

      {state.products.length === 0 ? (
        <p>No tienes productos en el carrito</p>
      ) : (
        state.products.map((p) => <CardProductCart product={p} key={p._id} />)
      )}

      <button className='generalButton'>Finalizar Compra</button>
    </div>
  );
};
