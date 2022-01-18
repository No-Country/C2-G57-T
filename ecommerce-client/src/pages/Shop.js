import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "../components/Layouts/Product";
import { clientAxios } from "../config/axios";

export const Shop = () => {
  const [dataProduct, setDataProduct] = useState([]);  
  const {pathname} = useLocation()

  const split  = pathname.split('/')
  const cat = split[2].toUpperCase()
  let sub = split[3].toUpperCase()
  sub = sub.replace('%20', ' ');


  useEffect(() => {
    async function fetchData() {
      const { data } = await clientAxios.get(`/api/products`, {
        params: {
          category: cat,
          subcategory: sub,
        },
      });      
      setDataProduct(data);
    }
    fetchData();
    return ()=>{
      setDataProduct([])      
    }
  }, [pathname]);

  if (dataProduct.length === 0) return null;

  return (
    <div>
      <h1>Tienda</h1>

      <section className='dress-products'>
        {dataProduct.products.map((product) => (
          <Product
            uri='/'
            title={product.name}
            price={product.price}
            key={product._id}
            img={product.img}
            id={product._id}
          />
        ))}
      </section>
    </div>
  );
};
