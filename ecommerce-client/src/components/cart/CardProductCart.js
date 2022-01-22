import React, { useContext } from "react";
import { CartData } from "./../../cartContext/Cartcontext";

export const CardProductCart = ({ product }) => {
  const { deleteProductCart } = useContext(CartData);

  const handleDelete = () => {
    deleteProductCart(product._id);
  };

  return (
    <div className='productCart'>
      <img
        className='productCart__img'
        src={product.img[0].url}
        alt={product.name}
      />
      <div className='productCart__info'>
        <span>{product.name}</span>
        <span>Cantidad: {product.quantity}</span>
        <span>Talle: {product.size}</span>
        <span>Precio: ${product.price}</span>
      </div>
      <button className='productCart__button' onClick={handleDelete}>
      <i className="far fa-times-circle"></i>
      </button>
    </div>
  );
};
