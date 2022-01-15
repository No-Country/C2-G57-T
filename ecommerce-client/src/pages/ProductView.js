import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clientAxios } from "../config/axios";

import { CartData } from "../cartContext/Cartcontext";
import { ControlPanel } from "../components/controlPanelKeyUser/ControlPanel";
import { RegisterProductData } from "../registerProductContext/RegisterProductContext";

export const ProductView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { addProductCart, msg } = useContext(CartData);
  const { newProductUpdate } = useContext(RegisterProductData);
  const [dataProductView, setDataProductView] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data } = await clientAxios.get(`/api/products/${id}`);
      setDataProductView(data);
    }
    fetchData();
    return () => {
      setDataProductView("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!dataProductView) return null;

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuy = () => {
    if (!quantity || quantity <= 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    addProductCart(Object.assign(dataProductView, { quantity: quantity }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='productViewContainer'>
      <div className='grid-productView'>
        {dataProductView.img.map((image) => (
          <img
            src={image.url}
            alt='image1'
            key={image._id}
            className='img-productView'
          />
        ))}
      </div>
      <div className='productViewInfo'>
        <h2 className='productViewInfo__name'>
          {Object.entries(newProductUpdate).length === 0
            ? dataProductView.name
            : newProductUpdate.name}
        </h2>
        <h2 className='productViewInfo__description'>
          {Object.entries(newProductUpdate).length === 0
            ? dataProductView.description
            : newProductUpdate.description}
        </h2>
        <h2 className='productViewInfo__price'>
          $
          {Object.entries(newProductUpdate).length === 0
            ? dataProductView.price
            : newProductUpdate.price}
        </h2>
        {/* <h2 className='productViewInfo'>{dataProductView.talle}</h2> */}
        <input
          placeholder='Cantidad'
          type='number'
          min='0'
          onChange={(e) => handleChange(e)}
          className='generalInput'
        />
        <button
          className='productViewInfo__button generalButton'
          onClick={handleBuy}
        >
          Comprar
        </button>

        <button
          className='productViewInfo__button generalButton'
          onClick={handleBack}
        >
          Volver a la tienda
        </button>
        {error && <p style={{ color: "red" }}>Que cantidad deseas comprar?</p>}
        {msg && <p style={{ color: "red" }}>{msg}</p>}
        {/* solo lo debe ver el usuario clave */}
        <ControlPanel dataProductView={dataProductView} />
      </div>
    </div>
  );
};
