import React, { createContext, useReducer, useState } from "react";
import { cartReducer } from "./CartReduce";
import { ADD_CART, DELETE_PRODUCT_CART } from "./CartType";

export const CartData = createContext();

export const CartContext = ({ children }) => {
  const [showOpenModalCart, setShowOpenModalCart] = useState(false);
  const [msg, setMsg] = useState("");

  const initialState = {
    products: [],
    product: "",
    quantity: "",
    description: "",
    image: null,
    quantityArticles: 0,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProductCart = (dataProductView) => {
    if (state.products.some((id) => id._id === dataProductView._id)) {
      setMsg("El articulo ya esta en el carrito");
      setTimeout(() => {
        setMsg("");
      }, 3000);
      return;
    }

    dispatch({
      type: ADD_CART,
      payload: dataProductView,
    });
    setShowOpenModalCart(true);
  };

  const deleteProductCart = (id) => {
    dispatch({
      type: DELETE_PRODUCT_CART,
      payload: id,
    });
  };

  return (
    <CartData.Provider
      value={{
        state,
        showOpenModalCart,
        msg,
        deleteProductCart,
        addProductCart,
        setShowOpenModalCart,
      }}
    >
      {children}
    </CartData.Provider>
  );
};
