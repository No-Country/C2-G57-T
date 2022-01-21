import React from "react";
import { off } from "../helpers/percentage";

export const CardSend = ({ product }) => {
  const { img, name, quantity, size, price, discount } = product;

  return (
    <>
      <img src={img[0].url} alt={name} className='cardEnd__img' />
      <div>
        <p>Producto: {name}</p>
        <p>Cantidad: {quantity}</p>
        <p>Talle: {size}</p>
        <span className={discount > 0 ? "priceOFF" : ""}>
          <p>$ {price}</p>
        </span>
        {discount > 0 && <span>${off(price, discount)} ARS</span>}
      </div>
    </>
  );
};
