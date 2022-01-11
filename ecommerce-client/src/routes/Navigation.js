import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserData } from "../authContext/AuthContext";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Profile } from "../pages/Profile";
import { RegisterProducts } from "../pages/RegisterProducts";
// import your route components too
import Dress from "./../pages/Dress";
import ProdDetail from "../pages/ProdDetail";

export const Navigation = () => {
  //pedir endpoint para mantener el usuario

  const { state } = useContext(UserData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          {state.token && <Route path='profile' element={<Profile />} />}
          <Route path='dress' element={<Dress />} />
          <Route path='prodDetail' element={<ProdDetail />} />
          <Route path='registerproducts' element={<RegisterProducts />} />

          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
