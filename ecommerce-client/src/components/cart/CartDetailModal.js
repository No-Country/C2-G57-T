import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartData } from "../../cartContext/Cartcontext";
import { CardProductCart } from "./CardProductCart";

//es el modal aside del carrito
export const CartDetailModal = () => {
  const navigate = useNavigate();
  const { state, setShowOpenModalCart } = useContext(CartData);

  //corrobora si hay un usuario logueado
  const handleEndBuy = () => {
    const token = localStorage.getItem("token");
    setShowOpenModalCart(false);
    if (state.products.length === 0) return;
    if (token) {
      navigate("/endbuy");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className='CartModal'>
        <div className='CartModal__flex'>
          <button
            className='CartModal__button'
            onClick={() => setShowOpenModalCart(false)}
          >
            <i className='far fa-times-circle'></i> Cerrar Carrito
          </button>
        </div>

        {state.products.length === 0 ? (
          <p className='aviso_cart'>No tienes productos en el carrito</p>
        ) : (
          state.products.map((p) => <CardProductCart product={p} key={p._id} />)
        )}

        <button className='generalButton end-purchase' onClick={handleEndBuy}>
          Finalizar compra
        </button>
      </div>
    </>
  );
};
