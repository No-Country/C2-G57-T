import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardSend } from "../components/CardSend";
import { DataSend } from "../components/DataSend";
import { CartData } from "./../cartContext/Cartcontext";
import { Profile } from "./Profile";

export const EndBuy = () => {
  const navigate = useNavigate();

  const { state } = useContext(CartData);
  const { products } = state;

  useEffect(() => {
    if (products.length === 0) {
      navigate(-1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const total = () => {
    const total = products.reduce(
      (acc, product) =>
        acc +
        (product.offer
          ? product.offer * product.quantity
          : product.price * product.quantity),
      0
    );

    return total;
  };

  return (
    <div className='container__page'>
      <h1>Finaliza tu compra</h1>
      <div className='endBuy__grid'>
        <div className='accordion' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                Datos Personales
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <Profile type={true} />
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                Datos de envio
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <DataSend />
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                Realizar Pago
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <h1>Componente 3</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='detail__buy'>
          <h3>Detalle de la compra</h3>

          {products.map((product) => (
            <div key={product._id} className='cardEnd__flex'>
              <CardSend product={product} />
            </div>
          ))}
          <div>Total: $ {total()}</div>
        </div>
      </div>
    </div>
  );
};
