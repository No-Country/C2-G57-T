import { createContext, useState } from "react";
import { clientAxios } from "../config/axios";
import { useError } from "../hooks/useError";

export const RegisterProductData = createContext({
  product: null,
});

export const RegisterProductContext = ({ children }) => {
  const [newProductUpdate, setNewProductUpdate] = useState({});
  const { sendError, message } = useError();

  const imageInfoProduct = async (images, info, size) => {
    try {
      let bodyFormData = new FormData();

      images.map((image) => bodyFormData.append("file", image.file));
      bodyFormData.append("name", info.name);
      bodyFormData.append("price", info.price);
      bodyFormData.append("description", info.description);
      bodyFormData.append("category", info.category);
      bodyFormData.append("subcategory", info.subcategory);
      bodyFormData.append("destacado", info.destacados);
      bodyFormData.append("discount", info.discount);
      bodyFormData.append("talle", size);

      await clientAxios
        .post("/api/products", bodyFormData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((resp) => {
          console.log(resp);
        });
    } catch (error) {
      console.log("error", error.response.data.msg);
      sendError();
      message(error.response.data.msg);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await clientAxios.delete(`/api/products/${id}`);
    } catch (error) {
      console.log("error", error.response.data.msg);
    }
  };

  const updateProduct = async (id, update) => {
    try {
      const { data } = await clientAxios.put(`/api/products/${id}`, update);
      setNewProductUpdate(data);
    } catch (error) {
      console.log("error", error.response.data.msg);
    }
  };

  return (
    <RegisterProductData.Provider
      value={{
        newProductUpdate,
        imageInfoProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </RegisterProductData.Provider>
  );
};
