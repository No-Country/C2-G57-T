import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Layouts/Product";
import { clientAxios } from "../config/axios";

export const Shop = () => {
  const [dataProduct, setDataProduct] = useState([])  
  const params = useParams();  

  useEffect(() => {
    async function fetchData() {
      const {data} = await clientAxios.get("/api/products");
      setDataProduct(data)
    }
    fetchData();
  }, []);


  console.log('data',dataProduct )

  return (
    <div>
      <h1>{`shop ${params.id}`}</h1>

      <section className="dress-products">
        {dataProduct.map(product=>(
            <Product uri='/'  title={product.name} price={product.price} key={product._id} img={product.img}/>

        ))}

        
      </section>



    </div>
  );
};
