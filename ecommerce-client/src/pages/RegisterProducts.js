import React, { useState, useContext } from "react";
import { Dropzone } from "../components/RegisterProduct/DropZone";
import { FormRegisterProduct } from "../components/RegisterProduct/FormRegisterProduct";
import { fileUpload as fileforCloudi } from "../helpers/fileUpload";
import { RegisterProductData } from "./../registerProductContext/RegisterProductContext";

export const RegisterProducts = () => {
  const { imageInfoProduct } = useContext(RegisterProductData);
  const [fileUpload, setFileUpload] = useState([]);

  const [valuesForm, setValuesForm] = useState("");

  const handleUploadImage = async () => {
    try {
      const cloudiURL = await fileforCloudi(fileUpload);
      console.log("cloudiuRL", cloudiURL);
      imageInfoProduct(cloudiURL, valuesForm);
    } catch (error) {
      console.log("erro", error);
    }
  };

  return (
    <div className='container__page'>
      <h1>Registra un producto nuevo</h1>
      <div className='registerProductContainer'>
        <Dropzone
          setFileUpload={setFileUpload}
          fileUpload={fileUpload}
          handleUploadImage={handleUploadImage}
        />
        <FormRegisterProduct
          setValuesForm={setValuesForm}
          handleUploadImage={handleUploadImage}
        />
      </div>
    </div>
  );
};
