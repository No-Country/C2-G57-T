import React from "react";

import { off } from "../helpers/percentage";

export const CardSend = ({ product }) => {
  const { img, name, quantity, size, price, discount } = product;

  return (
    <>
      <img src={img[0].url} alt={name} className='cardEnd__img' />
      <div className="info_endbuy">
        <span>Producto: {name}</span>
        <span>Cantidad: {quantity}</span>
        <span>Talle: {size}</span>
        {discount > 0 ? 
        <span>${off(price, discount)} ARS</span>
        :
        <span>${price} ARS</span>
        }
      </div>
    </>
  );
};
