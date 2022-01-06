import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
// import your route components too
import Dress from "./../pages/Dress";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='dress' element={<Dress />} />

          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
