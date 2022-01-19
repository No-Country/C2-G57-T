import React from "react";
import { Link } from "react-router-dom";

const CardHome = ({ name, img }) => {
  return (
    <div className='bg-section'>
      <img src={img} alt='#' />
      <Link to={"dress/product/destacados"}>{name}</Link>
    </div>
  );
};

export default CardHome;
