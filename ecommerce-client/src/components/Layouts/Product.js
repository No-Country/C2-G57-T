import React from "react";
import { Link } from "react-router-dom";

const Product = ({ img, title, price, uri,id }) => {


    

  return (
    <Link to={uri} className='card-product'>
      <img src={img[0]} alt='#' />
      <div className='detail'>
        <span>{title}</span>
        <span>${price}</span>
      </div>
    </Link>
  );
};

export default Product;
