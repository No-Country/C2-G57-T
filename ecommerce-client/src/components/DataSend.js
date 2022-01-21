import React from "react";
import { useForm } from "../hooks/useForm";

export const DataSend = () => {
  const { handleInputChange } = useForm();

  return (
    <div>
      <h4>Seleccione el metodo de entrega</h4>

      <div className='radio-container'>
        <div className='radio-toolbar'>
          <input
            type='radio'
            value='sendAddress'
            name='discount'
            onChange={handleInputChange}
            id='ten'
          />
          <label htmlFor='ten' className='labelRadio labelRadio__custom--send'>
            DOMICILIO
          </label>

          <input
            type='radio'
            value='retirementCompany'
            name='discount'
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
            name='discount'
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
