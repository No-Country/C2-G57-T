import React, { useState, useContext, useEffect } from "react";
import { EndBuyData } from "../endBuyContext/EndBuyContext";

//componente cargado dentro del acordion en el fin de la compra
export const DataSend = () => {
  const [formSend, setFormSend] = useState({
    formSend: "",
  });

  const { addFormSend } = useContext(EndBuyData);

  const handleInputChange = (e) => {
    setFormSend({
      ...formSend,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    addFormSend(formSend.formSend);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formSend]);

  return (
    <div>
      <h4>Seleccione el metodo de entrega</h4>

      <div className='radio-container'>
        <div className='radio-toolbar'>
          <input
            type='radio'
            value='sendAddress'
            name='formSend'
            onChange={handleInputChange}
            id='ten'
          />
          <label htmlFor='ten' className='labelRadio labelRadio__custom--send'>
            DOMICILIO
          </label>

          <input
            type='radio'
            value='retirementCompany'
            name='formSend'
            onChange={handleInputChange}
            id='twenty'
          />
          <label
            htmlFor='twenty'
            className='labelRadio labelRadio__custom--send'
          >
            RETIRO EN SUCURSAL
          </label>

          <input
            type='radio'
            value='retirementMail'
            name='formSend'
            onChange={handleInputChange}
            id='thirty'
          />
          <label
            htmlFor='thirty'
            className='labelRadio labelRadio__custom--send'
          >
            RETIRO EN CORREO
          </label>
        </div>
      </div>
    </div>
  );
};
