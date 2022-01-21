import React, { useContext } from "react";
import { CartData } from "./../../cartContext/Cartcontext";
import { off } from "./../../helpers/percentage";


//es la tarjeta de cada producto en el carrito
export const CardProductCart = ({ product }) => {
  const { deleteProductCart } = useContext(CartData);

  const { img, name, quantity, size, discount, price } = product;

  const handleDelete = () => {
    deleteProductCart(product._id);
  };

  return (
    <div className='productCart'>
      <img className='productCart__img' src={img[0].url} alt={name} />
      <div className='productCart__info'>
        <span>Producto: {name}</span>
        <span>Cantidad: {quantity}</span>
        <span>Talle: {size}</span>
        <span>Precio: {discount > 0 ? off(price, discount) : price}</span>
      </div>
      <button className='productCart__button' onClick={handleDelete}>
        <i className='far fa-times-circle'></i>
      </button>
    </div>
  );
};
