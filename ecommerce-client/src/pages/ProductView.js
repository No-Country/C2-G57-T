import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clientAxios } from "../config/axios";

import { CartData } from "../cartContext/Cartcontext";
import { ControlPanel } from "../components/controlPanelKeyUser/ControlPanel";
import { RegisterProductData } from "../registerProductContext/RegisterProductContext";
import { UserData } from "../authContext/AuthContext";
import { off } from "../helpers/percentage";

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


export const ProductView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { state } = useContext(UserData);
  const { addProductCart, msg } = useContext(CartData);
  const { newProductUpdate } = useContext(RegisterProductData);
  const [dataProductView, setDataProductView] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [error, setError] = useState(false);

  //llamada a la api por id
  useEffect(() => {
    async function fetchData() {
      const { data } = await clientAxios.get(`/api/products/${id}`);

      if (data.discount > 0) {
        Object.assign(data, { offer: off(data.price, data.discount) });
      }
      setDataProductView(data);
    }
    fetchData();
    return () => {
      setDataProductView("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!dataProductView) return null;

  //toma el value del input de cantidad
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };
  //toma el value de los radio buttons
  const handleChangeSize = (e) => {
    setSize(e.target.value);
  };

  //envia la informacion de la compra
  const handleBuy = () => {
    if (!quantity || quantity <= 0 || size === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    addProductCart(
      Object.assign(dataProductView, { quantity: quantity }, { size: size })
    );
  };

  const handleBack = () => {
    navigate(-1);
  };

  const { description, discount, img, name, price } = dataProductView;

  const talle = dataProductView.talle[0].split(",");

  return (
    <div className='productViewContainer container__page'>
      <div className='grid-productView'>
        {img.map((image) => (
          <img
            src={image.url}
            alt={image._id}
            key={image._id}
            className='img-productView'
          />
        ))}
      </div>
      <div className='productViewInfo'>
        <h2 className='productViewInfo__name'>
          {Object.entries(newProductUpdate).length === 0
            ? name
            : newProductUpdate.name}
        </h2>
        <p className='productViewInfo__description'>
          {Object.entries(newProductUpdate).length === 0
            ? description
            : newProductUpdate.description}
        </p>

        {dataProductView.discount > 0
        ? Object.entries(newProductUpdate).length === 0
        ? off(dataProductView.price, dataProductView.discount)
        : off(newProductUpdate.price, dataProductView.discount)
        : null}
          
        <div className='productViewInfo__discountFlex'>
          {dataProductView.discount > 0 ? 
          <h5
          className={
            dataProductView.discount > 0
              ? "productViewInfo__price priceOFF"
              : ""
          }
        >
          $
          {Object.entries(newProductUpdate).length === 0
            ? toThousand(dataProductView.price)
            : newProductUpdate.price}
        </h5> :
        <h2>
          $
          {Object.entries(newProductUpdate).length === 0
            ? toThousand(dataProductView.price)
            : newProductUpdate.price}
        </h2>}
          
          {dataProductView.discount > 0 && (
            <span>{dataProductView.discount}% OFF</span>
          )}
        </div>
        
        <div className='radio-container'>
          {talle.map((s, i) => (
            <div key={s} className='radio-toolbar'>
              <input
                type='radio'
                value={s}
                name='gender'
                onChange={handleChangeSize}
                id={i}
              />
              <label htmlFor={i} className='labelRadio'>
                {s}
              </label>
            </div>
          ))}
        </div>

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
          COMPRAR
        </button>

        <button
          className='productViewInfo__button generalButton'
          onClick={handleBack}
        >
          VOLVER A LA TIENDA
        </button>
        {error && (
          <p style={{ color: "red" }}>
            Debes seleccionar la catidad y el talle
          </p>
        )}
        {msg && <p style={{ color: "red" }}>{msg}</p>}
        {/* solo lo debe ver el usuario clave */}
        {state.isAdmin && <ControlPanel dataProductView={dataProductView} />}
      </div>
    </div>
  );
};
