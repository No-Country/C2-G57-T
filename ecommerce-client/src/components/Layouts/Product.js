import React from "react";
import { Link } from "react-router-dom";
import { off } from "../../helpers/percentage";

const Product = ({ img, title, price, id, product }) => {
  const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <Link to={id} className='card-product'>
      {img.length > 0 && <img src={img[0].url} alt='#' />}
      <div className='detail'>
        <span>{title}</span>
        <div className="price">
        <h3>
          {product.discount > 0 ? off(price, product.discount) : `$${toThousand(price)} ARS`}
        </h3>
        {product.discount !== 0 ? <span>{product.discount}%</span> : null}
        </div>
        
      </div>
    </Link>
  );
};

export default Product;
