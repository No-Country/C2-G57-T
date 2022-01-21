import { ADD_CART, CLEAR_CART, DELETE_PRODUCT_CART } from "./CartType";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
        quantityArticles: state.quantityArticles + 1,
      };
    case DELETE_PRODUCT_CART:
      return {
        ...state,

        products: state.products.filter((i) => i._id !== action.payload),
        quantityArticles: state.quantityArticles - 1,
      };
    case CLEAR_CART:
      return {
        ...state,
        products: [],
        quantityArticles: 0,
      };

    default:
      return state;
  }
};
