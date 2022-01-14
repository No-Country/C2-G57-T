import React from "react";
import { Link } from "react-router-dom";

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
      <aside>
        <ul>
          <li><Link to={'/'}>INDUMENTARIA</Link>
            <ul>
              <li><Link to={'/'}>REMERAS</Link>
                <ul>
                  <li>
                    <Link to={'/'}>CON MANGAS (15)</Link>
                  </li>
                  <li>
                    <Link to={'/'}>SIN MANGAS (20)</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
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
