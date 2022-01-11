import { createContext, useReducer } from "react";
import { clientAxios } from "../config/axios";
import { RegisterProductReducer } from "./RegisterProductReducer";
import { REGISTER_PRODUCT } from "./TypesRegisterProducts";

export const RegisterProductData = createContext({
  product: null,
});

export const RegisterProductContext = ({ children }) => {
  const initialState = {
    images: [],
    descriptionProducts: null,
  };

  const [state, dispatch] = useReducer(RegisterProductReducer, initialState);

  const imageInfoProduct = async (images, info) => {
    const urlImage = images.map((img) => img.secure_url);

    const product = {
      img: urlImage,
      description: info.description,
      name: info.name,
      price: info.price,
    };

    console.log("productfinal", product);

    try {
      const resp = await clientAxios.post("/api/products", product);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error.response.data.msg);
    }

    dispatch({
      type: REGISTER_PRODUCT,
      payload: {
        image: images,
        info: info,
      },
    });
  };

  return (
    <RegisterProductData.Provider
      value={{
        imageInfoProduct,
        state,
      }}
    >
      {children}
    </RegisterProductData.Provider>
  );
};
