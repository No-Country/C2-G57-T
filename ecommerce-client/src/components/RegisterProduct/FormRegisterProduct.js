import React, { useState, useEffect } from "react";
import { sendSubtype } from "./../../helpers/sedSubtype";

export const FormRegisterProduct = ({ values, handleInputChange, setSize }) => {
  const [subType, setSubType] = useState([]);

  const [check, setCheck] = useState({
    options: [
      { check: false, id: "S" },
      { check: false, id: "M" },
      { check: false, id: "L" },
      { check: false, id: "XL" },
    ],
  });

  useEffect(() => {
    const subtypeArticle = sendSubtype(values);
    if (subtypeArticle) {
      setSubType(subtypeArticle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.type]);

  const onSeleccion = (e) => {
    let { name } = e.target;
    let options = [...check.options];
    let index = options.findIndex((el) => el.id === name);
    options[index].check = !options[index].check;
    setCheck({
      options: [...options],
    });

    let select = check.options.filter((el) => el.check);
    let endSelect = select.map((id) => id.id);
    setSize(endSelect);
  };

  return (
    <form>
      <div className='registerProductInputContainer'>
        <input
          name='name'
          onChange={handleInputChange}
          placeholder='Nombre Del Producto'
          type='text'
          value={values.name}
        />
        <input
          name='description'
          onChange={handleInputChange}
          placeholder='Descripcion'
          type='text'
          value={values.description}
        />
        <input
          name='price'
          onChange={handleInputChange}
          placeholder='Precio'
          type='number'
          value={values.price}
        />
        <input
          name='color'
          onChange={handleInputChange}
          placeholder='Color'
          type='text'
          value={values.color}
        />
 
        <div className='checkbox-container'>
          {check.options.map((el) => {
            return (
              <div key={el.id} className='checkbox-info'>
                <label className='label' htmlFor={el.id}>{el.id}</label>
                <input
                  type='checkbox'
                  value={el.check}
                  onChange={onSeleccion}
                  name={el.id}
                  className='option-input checkbox'
                  id={el.id}
                />
              </div>
            );
          })}
        </div>
        <input
          name='stock'
          onChange={handleInputChange}
          placeholder='Stock'
          type='number'
          value={values.stock}
        />
      </div>

      <select
        // value={values.type}
        name='type'
        defaultValue={"DEFAULT"}
        className='select form-select form-select-lg my-3'
        onChange={handleInputChange}
      >
        <option value='DEFAULT' disabled>
          Selecciona un tipo de producto
        </option>

        <option value='t-shirt'>Remeras</option>
        <option value='skirts'>Faldas</option>
        <option value='dresses'>Vestidos</option>
        <option value='pants'>Pantalones</option>
      </select>

      <select
        className='select form-select form-select-lg'
        // value={value}
        name='subType'
        defaultValue={"DEFAULT"}
        onChange={handleInputChange}
      >
        <option value='DEFAULT' disabled>
          Selecciona un Subtipo de producto
        </option>

        {subType.length > 0 &&
          subType.map((s) =>
            s.sub.map((s, i) => (
              <option value={s} key={i}>
                {s}
              </option>
            ))
          )}
      </select>
    </form>
  );
};
