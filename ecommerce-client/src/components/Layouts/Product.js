import React from "react";
import { Link } from "react-router-dom";

const Product = ({ img, title, price, id }) => {

  const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

  return (
    <Link to={id} className='card-product'>
    {img.length > 0 &&  <img src={img[0].url} alt='#' />}
      <div className='detail'>
        <span>{title}</span>
        <span>${toThousand(price)} ARS</span>
      </div>
    </Link>
  );
};

export default Product;
