import React from "react";
import { Link } from "react-router-dom";
import { off } from "../../helpers/percentage";

//si el producto esta en oferta mostrara el precio oferta
const Product = ({ img, title, price, id, product }) => {

  return (
    <Link to={id} className='card-product'>
      {img.length > 0 && <img src={img[0].url} alt='#' />}
      <div className='detail'>
        <span>{title}</span>
        <div className="price">
        <h5>
          {product.discount > 0 ? `$${off(price, product.discount)} ARS` : `$${price} ARS`}
        </h5>
        {product.discount !== 0 ? <span>{product.discount}%</span> : null}
        </div>
        
      </div>
    </Link>
  );
};

export default Product;
