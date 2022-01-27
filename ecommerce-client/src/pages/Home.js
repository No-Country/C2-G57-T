import React from "react";

import Carousel from "../components/Carousel";
import CardHome from "../components/CardHome";

import section01 from "../images/sections/section01.jpg";
import section02 from "../images/sections/section02.jpg";
import { tokenAuth } from "./../config/authTokenHeaders";

const Home = () => {
  const token = localStorage.getItem("token");
  if (token) {
    tokenAuth(token);
  }
  return (
    <>
      <div className='container__page'>
        <Carousel />
        <div className='sections-home'>
          <CardHome name='DESTACADOS' img={section01} uri="dress/product/destacados" />
          <CardHome name='10% 20% 30% OFF' img={section02} uri='dress/product/discount' />          
        </div>
      </div>
    </>
  );
};

export default Home;
