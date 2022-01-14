import React from "react";

// components
import Carousel from '../components/Carousel';
import CardHome from '../components/CardHome';
import CardRedes from "../components/CardRedes";

// images
import section01 from '../images/sections/section01.jpg';
import section02 from '../images/sections/section02.jpg';
import section03 from '../images/sections/section03.jpg';
import redes01 from '../images/redes/redes01.jpg';
import redes02 from '../images/redes/redes02.jpg';
import { tokenAuth } from './../config/authTokenHeaders';


const Home = () => {
  const token = localStorage.getItem("token");
  if (token) {
    tokenAuth(token);
  }
  return (
    <>
      <Carousel/>
      <div className='container__page'>
        <div className="sections-home">
          <CardHome name='DESTACADOS' img={section01} uri='/dress' />
          <CardHome name='30% OFF' img={section02} uri='#' />
          <CardHome name='ACCESORIOS' img={section03} uri='#' />
        </div>
        <div className="sections-home redes-home">
          <CardRedes img={redes01}>
            <i className="fab fa-instagram"></i>
          </CardRedes>
          <CardRedes img={redes02}>
            <i className="fab fa-facebook"></i>
          </CardRedes>
        </div>
      </div>
    </>
  );
};

export default Home;
