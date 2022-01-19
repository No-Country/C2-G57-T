import React from "react";

// components
import Carousel from "../components/Carousel";
import CardHome from "../components/CardHome";

// images
import section01 from "../images/sections/section01.jpg";
import section02 from "../images/sections/section02.jpg";
import section03 from "../images/sections/section03.jpg";
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
          <CardHome name='DESTACADOS' img={section01} />
          <CardHome name='30% OFF' img={section02} uri='#' />
          <CardHome name='ACCESORIOS' img={section03} uri='#' />
        </div>
      </div>
    </>
  );
};

export default Home;
