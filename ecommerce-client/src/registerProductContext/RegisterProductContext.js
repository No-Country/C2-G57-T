import { createContext } from "react";
import { clientAxios } from "../config/axios";

export const RegisterProductData = createContext({
  product: null,
});

export const RegisterProductContext = ({ children }) => {
  const imageInfoProduct = async (images, info) => {
    console.log("productfinal", images);

    try {
      let bodyFormData = new FormData();

      images.map((image) => bodyFormData.append("file", image.file));
      bodyFormData.append("name", info.name);
      bodyFormData.append("price", info.price);
      bodyFormData.append("description", info.description);

      const resp = await clientAxios
        .post("/api/products", bodyFormData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((resp) => {
          console.log(resp);
        });
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error.response.data.msg);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await clientAxios.delete(`/api/products/${id}`);
      
    } catch (error) {
      console.log("error", error.response.data.msg);
    }
  };


  const updateProduct = async(id, update)=>{
    try {
     const resp = await clientAxios.put(`/api/products/${id}`, update);

      console.log('resp', resp )

    } catch (error) {
      console.log("error", error.response.data.msg);
    }


  }

  return (
    <RegisterProductData.Provider
      value={{
        imageInfoProduct,
        deleteProduct,
        updateProduct
      }}
    >
      {children}
    </RegisterProductData.Provider>
  );
};
