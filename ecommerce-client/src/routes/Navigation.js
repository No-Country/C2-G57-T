import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Profile } from "../pages/Profile";
// import your route components too
import Dress from "./../pages/Dress";

export const Navigation = () => {
  //pedir endpoint para mantener el usuario

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='profile' element={<Profile />} />
          <Route path='dress' element={<Dress />} />

          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
