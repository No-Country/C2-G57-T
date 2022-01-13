import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clientAxios } from "../config/axios";

export const ProductView = () => {
  const [dataProductView, setDataProductView] = useState("");

  const { id } = useParams();

  console.log("data", dataProductView);

  useEffect(() => {
    async function fetchData() {
      const { data } = await clientAxios.get(`/api/products/${id}`);
      setDataProductView(data);
    }
    fetchData();
  }, []);

  if (!dataProductView) return null;
  return (
    <div className='productViewContainer'>
      <div className='grid-productView'>
        {dataProductView.img.map((image) => (
          <img src={image.url} alt='image1' key={image._id} />
        ))}
      </div>
      <div className='productViewInfo'>
        <h2>{dataProductView.name}</h2>
        <h2>{dataProductView.description}</h2>
        <h2>{dataProductView.price}</h2>
        <h2>{dataProductView.talle}</h2>
      </div>
    </div>
  );
};
