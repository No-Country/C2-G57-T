import React, { useState, useContext } from "react";
import { Dropzone } from "../components/RegisterProduct/DropZone";
import { FormRegisterProduct } from "../components/RegisterProduct/FormRegisterProduct";
import { useForm } from "../hooks/useForm";
import { RegisterProductData } from "./../registerProductContext/RegisterProductContext";

export const RegisterProducts = () => {
  const { imageInfoProduct } = useContext(RegisterProductData);
  const [fileUpload, setFileUpload] = useState([]);

  const { values, handleInputChange, reset } = useForm({
    name: "",
    description: "",
    price: "",
    color: "",
    size: "",
    stock: "",
    type: "",
    subType: "",
  });

  const handleUploadImage = () => {
    try {
      imageInfoProduct(fileUpload, values);
      setFileUpload([]);
      reset();
    } catch (error) {
      console.log("erro", error);
    }
  };

  return (
    <div className='container__page'>
      <h1>Registra un producto nuevo</h1>
      <div className='registerProductContainer'>
        <FormRegisterProduct
          values={values}
          handleInputChange={handleInputChange}
        />
        <Dropzone
          setFileUpload={setFileUpload}
          fileUpload={fileUpload}
          handleUploadImage={handleUploadImage}
        />
      </div>
    </div>
  );
};
