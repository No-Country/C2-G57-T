import { ADD_FORM_SEND, ADD_PRODUCT, DATA_USER } from "./EndBuyType";

export const endbuyReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case DATA_USER:
      return {
        ...state,
        dataUser: action.payload,
      };
    case ADD_FORM_SEND:
      return {
        ...state,
        formSend: action.payload,
      };

    default:
      return state;
  }
};
