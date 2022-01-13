import React from "react";
import { Link } from "react-router-dom";

const Product = ({ img, title, price, uri, id }) => {


  return (
    <Link to={id} className='card-product'>
    {img.length > 0 &&  <img src={img[0].url} alt='#' />}
      <div className='detail'>
        <span>{title}</span>
        <span>${price}</span>
      </div>
    </Link>
  );
};

export default Product;
