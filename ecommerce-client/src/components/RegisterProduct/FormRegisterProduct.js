import React, { useState, useEffect } from "react";
import { sendSubtype } from "./../../helpers/sedSubtype";

export const FormRegisterProduct = ({
  values,
  handleInputChange,
  setSize,
  handleInputCheckbox,
}) => {
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
  }, [values.category]);

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
        
        <input
          name='stock'
          onChange={handleInputChange}
          placeholder='Stock'
          type='number'
          value={values.stock}
        />
      </div>

      <div className='checkbox-container'>
          {check.options.map((el) => {
            return (
              <div key={el.id} className='checkbox-info'>
                <label className='label' htmlFor={el.id}>
                  {el.id}
                </label>
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

      <select
        value={values.category}
        name='category'
        // defaultValue={values.category}
        className='select form-select form-select-lg my-3'
        onChange={handleInputChange}
      >
        <option value='' disabled>
          Selecciona un tipo de producto
        </option>

        <option value='t-shirt'>Remeras</option>
        <option value='skirt'>Faldas</option>
        <option value='dress'>Vestidos</option>
        <option value='pant'>Pantalones</option>
      </select>

      <select
        value={values.subcategory}
        className='select form-select form-select-lg'
        name='subcategory'
        // defaultValue={"DEFAULT"}
        onChange={handleInputChange}
      >
        <option value='' disabled>
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

      <div className="checkbox-destacado">
        <div className='checkbox-info'>
          <label className='label' htmlFor='check'>
            Destacado
          </label>
          <input
            type='checkbox'
            value={values.destacados}
            checked={values.destacados}
            onChange={handleInputCheckbox}
            name='destacados'
            className='option-input checkbox'
            id={check}
          />
        </div>
      </div>
      <div className='radio-container'>
        <div className='radio-toolbar'>
          <input
            type='radio'
            value='10'
            name='discount'
            onChange={handleInputChange}
            id='ten'
          />
          <label htmlFor='ten' className='labelRadio labelRadio__custom'>
            10%
          </label>

          <input
            type='radio'
            value='20'
            name='discount'
            onChange={handleInputChange}
            id='twenty'
          />
          <label htmlFor='twenty' className='labelRadio labelRadio__custom'>
            20%
          </label>

          <input
            type='radio'
            value='30'
            name='discount'
            onChange={handleInputChange}
            id='thirty'
          />
          <label htmlFor='thirty' className='labelRadio labelRadio__custom'>
            30%
          </label>
        </div>
      </div>
    </form>
  );
};
