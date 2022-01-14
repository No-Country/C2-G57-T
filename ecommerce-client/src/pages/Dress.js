import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

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
      <div className="container-dress">
        <aside className="aside-dress">
          <ul className="first-ul">
            <li><Link to={'/'}>INDUMENTARIA <i className="fas fa-chevron-right"></i></Link>
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
                <li>
                  <Link to={'/'}>FALDAS</Link>
                  <ul>
                    <li><Link to={'/'}>CORTAS (10)</Link></li>
                    <li><Link to={'/'}>LARGAS (20)</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to={'/'}>VESTIDOS</Link>
                  <ul>
                    <li><Link to={'/'}>DE DIA (40)</Link></li>
                    <li><Link to={'/'}>DE NOCHE (25)</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to={'/'}>PANTALONES</Link>
                  <ul>
                    <li><Link to={'/'}>JEANS (40)</Link></li>
                    <li><Link to={'/'}>LEGGINS (25)</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li><Link to={'/'}>ACCESORIOS</Link>
              <ul>
                <li><Link to={'/'}>AROS (10)</Link></li>
                <li><Link to={'/'}>COLLARES (9)</Link></li>
              </ul>
            </li>

            <li>COLORES 
              <ul>
                <li>
                  <Link to={'/'}>NEGRO</Link>
                </li>
                <li>
                  <Link to={'/'}>BLANCO</Link>
                </li>
                <li>
                  <Link to={'/'}>AZUL</Link>
                </li>
                <li>
                  <Link to={'/'}>ROJO</Link>
                </li>
                <li>
                  <Link to={'/'}>MARRON</Link>
                </li>
              </ul>
            </li>

            <li>TALLES
              <ul>
              <li>
                  <Link to={'/'}>S</Link>
                </li>
                <li>
                  <Link to={'/'}>M</Link>
                </li>
                <li>
                  <Link to={'/'}>L</Link>
                </li>
                <li>
                  <Link to={'/'}>XL</Link>
                </li>
                <li>
                  <Link to={'/'}>2XL</Link>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
        <section className="dress-products">
          <Product id='/' img={prod01} title={'VESTIDO PINK'} price={'15.000'}/>
          <Product id='/' img={prod02} title={'VESTIDO PINK'} price={'15.000'}/>
          <Product id='/' img={prod03} title={'VESTIDO PINK'} price={'15.000'}/>
          <Product id='/' img={prod04} title={'VESTIDO PINK'} price={'15.000'}/>
        </section>
        <Outlet />
      </div>
    </div>
  );
};

export default Dress;
