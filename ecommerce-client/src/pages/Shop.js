import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "../components/Layouts/Product";
import { clientAxios } from "../config/axios";

export const Shop = () => {
  const [dataProduct, setDataProduct] = useState({});
  const [dataDestacado, setDataDestacado] = useState([]);
  const { pathname } = useLocation();

  const split = pathname.split("/");

  const cat = split[2].toUpperCase();
  let sub = split[3].toUpperCase();
  sub = sub.replace("%20", " ");

  //llamada api destacados
  useEffect(() => {
    async function fetchDataDestacado() {
      const { data } = await clientAxios.get(`/api/products/${sub}`);
      setDataDestacado(data);
    }

    //llamada api por filtro
    async function fetchData() {
      const { data } = await clientAxios.get(`/api/products/`, {
        params: {
          category: cat,
          subcategory: sub,
        },
      });
      if (data) {
        setDataProduct(data);
      }
    }

    if (sub === "DESTACADOS") {
      fetchDataDestacado();
    } else {
      fetchData();
    }

    return () => {
      setDataProduct({});
      setDataDestacado([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div>
      <h1>Tienda</h1>

      <section className='dress-products'>
        {Object.entries(dataProduct).length !== 0 &&
          dataProduct.products.map((product) => (
            <Product
              uri='/'
              title={product.name}
              price={product.price}
              key={product._id}
              img={product.img}
              id={product._id}
            />
          ))}
        {dataDestacado.length > 0
          ? dataDestacado.map((product) => (
              <Product
                uri='/'
                title={product.name}
                price={product.price}
                key={product._id}
                img={product.img}
                id={product._id}
              />
            ))
          : null}
      </section>
    </div>
  );
};
