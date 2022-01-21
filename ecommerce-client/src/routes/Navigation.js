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
import { Shop } from "./../pages/Shop";
import { ProductView } from "./../pages/ProductView";
import { EndBuy } from "../pages/EndBuy";

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
          <Route path='dress' element={<Dress />}>
            <Route path='t-shirt'>
              <Route path=':id' element={<Shop />} />
              <Route path=':id/:id' element={<ProductView />} />
            </Route>
            <Route path='skirt'>
              <Route path=':id' element={<Shop />} />
              <Route path=':id/:id' element={<ProductView />} />
            </Route>
            <Route path='dress'>
              <Route path=':id' element={<Shop />} />
              <Route path=':id/:id' element={<ProductView />} />
            </Route>
            <Route path='pant'>
              <Route path=':id' element={<Shop />} />
              <Route path=':id/:id' element={<ProductView />} />
            </Route>
            <Route path='product'>
              <Route path='destacados' element={<Shop />} />
              <Route path=':id/:id' element={<ProductView />} />
            </Route>
            <Route path='product'>
              <Route path='discount' element={<Shop />} />
              <Route path=':id/:id' element={<ProductView />} />
            </Route>
          </Route>

          <Route path='registerproducts' element={<RegisterProducts />} />
          <Route path='endbuy' element={<EndBuy />} />

          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
