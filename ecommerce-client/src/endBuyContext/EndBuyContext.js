import React, { createContext, useReducer } from "react";
import { endbuyReducer } from "./EndBuyReduce";
import { ADD_FORM_SEND, ADD_PRODUCT, DATA_USER } from "./EndBuyType";

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

  return (
    <EndBuyData.Provider
      value={{
        state,
        addProduct,
        addDataUser,
        addFormSend,
      }}
    >
      {children}
    </EndBuyData.Provider>
  );
};
