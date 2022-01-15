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
        <p>Producto: {product.name}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio: ${product.price}</p>
      </div>
      <button className='productCart__button' onClick={handleDelete}>
        <span>X</span>
      </button>
    </div>
  );
};
