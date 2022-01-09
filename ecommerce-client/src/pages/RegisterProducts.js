import React from "react";
import { Dropzone } from "../components/RegisterProduct/DropZone";
import { FormRegisterProduct } from "../components/RegisterProduct/FormRegisterProduct";

export const RegisterProducts = () => {
  return (
    <div className='container__page'>
      <h1>Registra un producto nuevo</h1>
      <div className='registerProductContainer'>
        <Dropzone />
        <FormRegisterProduct />
      </div>
    </div>
  );
};
