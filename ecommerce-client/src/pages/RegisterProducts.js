import React, { useState, useContext } from "react";
import { Dropzone } from "../components/RegisterProduct/DropZone";
import { FormRegisterProduct } from "../components/RegisterProduct/FormRegisterProduct";
import { validationProduct } from "../helpers/validationRegisterProduct";
import { useError } from "../hooks/useError";
import { useForm } from "../hooks/useForm";
import { RegisterProductData } from "./../registerProductContext/RegisterProductContext";

export const RegisterProducts = () => {
  const { imageInfoProduct } = useContext(RegisterProductData);
  const [fileUpload, setFileUpload] = useState([]);
  const [size, setSize] = useState([]);
  // const [error, setError] = useState(false);

  const { error, msg, sendError, message } = useError();

  const { values, handleInputChange, reset } = useForm({
    name: "",
    description: "",
    price: "",
    color: "",
    stock: "",
    category: "",
    subcategory: "",
  });

  const handleUploadImage = () => {
    const validation = validationProduct(values, size, fileUpload);

    if (!validation) {
      sendError();
      message("Todos los campos deben estar completos");
      return;
    }

    imageInfoProduct(fileUpload, values, size);

    setFileUpload([]);
    reset();
  };

  return (
    <div className='container__page'>
      <h1>Registra un producto nuevo</h1>
      {error ? <p className='banner__error'>{msg}</p> : null}
      <div className='registerProductContainer'>
        <FormRegisterProduct
          values={values}
          setSize={setSize}
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
