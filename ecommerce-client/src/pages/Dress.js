import React from "react";

// components
import Product from '../components/Layouts/Product'; 

// images
import prod01 from '../images/products/prod01.jpg';
import prod02 from '../images/products/prod02.jpg';
import prod03 from '../images/products/prod03.jpg';
import prod04 from '../images/products/prod04.jpg';

const Dress = () => {
  return (
    <div className='container__page'>
      <section className="dress-products">
        <Product uri='/' img={prod01} title={'VESTIDO PINK'} price={'15.000'}/>
        <Product uri='/' img={prod02} title={'VESTIDO PINK'} price={'15.000'}/>
        <Product uri='/' img={prod03} title={'VESTIDO PINK'} price={'15.000'}/>
        <Product uri='/' img={prod04} title={'VESTIDO PINK'} price={'15.000'}/>
      </section>
    </div>
  );
};

export default Dress;
