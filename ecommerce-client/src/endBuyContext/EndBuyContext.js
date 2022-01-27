import React, { createContext, useReducer } from "react";
import { endbuyReducer } from "./EndBuyReduce";
import { ADD_FORM_SEND, ADD_PRODUCT, DATA_USER } from "./EndBuyType";
import { loadStripe } from "@stripe/stripe-js";
import { clientAxios } from "./../config/axios";

export const EndBuyData = createContext();

export const EndBuyContext = ({ children }) => {
  const initialState = {
    product: [],
    dataUser: {},
    formSend: "",
  };

  const [state, dispatch] = useReducer(endbuyReducer, initialState);

  const addProduct = (product) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
  };

  const addDataUser = (data) => {
    dispatch({
      type: DATA_USER,
      payload: data,
    });
  };

  const addFormSend = (data) => {
    dispatch({
      type: ADD_FORM_SEND,
      payload: data,
    });
  };

  const endBuy = async () => {
    await loadStripe(
      "pk_test_51KJgkKLUp5Q6apTBbvB5gybK4L0cTqSJnsXSi5yNiUOW0b10OLM9HGEIWatnBbZZZ4u6RUoQjIZWOJhmryh19Gle002TyDafg6"
    );

    const items = state.product.map((i) => ({
      id: i._id,
      name: i.name,
      price: i.offer ? i.offer : i.price,
      quantity: parseInt(i.quantity),
    }));

    const resp = await clientAxios.post(
      "api/payment/create-checkout-session",
      JSON.stringify({ items }),
      { headers: { "Content-Type": "application/json" } }
    );
    const { url } = resp.data;
    if (url) {
      window.location = url;
    }
  };

  return (
    <EndBuyData.Provider
      value={{
        state,
        addProduct,
        addDataUser,
        addFormSend,
        endBuy,
      }}
    >
      {children}
    </EndBuyData.Provider>
  );
};
