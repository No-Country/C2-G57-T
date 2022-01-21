import React, { useContext } from "react";
import { CartData } from "../../cartContext/Cartcontext";
import { CardProductCart } from "./CardProductCart";

export const CartDetailModal = ({cartModal}) => {

  const { state, setShowOpenModalCart } = useContext(CartData);

  return (
    <>
      <div className={ cartModal? 'CartModal CartModal-on' : 'CartModal'}>
        <div className='CartModal__flex'>       
          <button
            className='CartModal__button'
            onClick={() => setShowOpenModalCart(false)}
          >
            <i className="far fa-times-circle"></i> Cerrar Carrito 
          </button>
        </div>

        {state.products.length === 0 ? (
          <p className="aviso_cart">No tienes productos en el carrito</p>
        ) : (
          state.products.map((p) => <CardProductCart product={p} key={p._id} />)
        )}

        <button className='generalButton end-purchase'>Finalizar compra</button>
      </div>
    </>
  );
};
