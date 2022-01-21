import React from "react";

export const CardSend = ({ product }) => {
  const { img, name, quantity, size, price } = product;

  return (
    <>
      <img src={img[0].url} alt={name} className="cardEnd__img" />
      <div>
        <p>Producto: {name}</p>
        <p>Cantidad: {quantity}</p>
        <p>Talle: {size}</p>
        <p>$ {price}</p>
      </div>
    </>
  );
};
