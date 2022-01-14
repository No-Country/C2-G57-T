import React, { useState, useEffect } from "react";

export const FormRegisterProduct = ({ values, handleInputChange }) => {
  const [subType, setSubType] = useState([]);

  console.log("values", values);

  const sendSubtype = (values) => {
    switch (values.type) {
      case "t-shirt":
        return [{ id: 1, sub: ["Con Mangas", "Sin Magas", "Manga Larga"] }];
      case "skirts":
        return [{ id: 2, sub: ["Cortas", "Largas"] }];

      case "dresses":
        return [
          {
            id: 3,
            sub: ["De dia", "De noche"],
          },
        ];

      case "pants":
        return [
          {
            id: 3,
            sub: ["Jeans", "De Morley"],
          },
        ];

      default:
        break;
    }
  };

  useEffect(() => {
    const subtypeArticle = sendSubtype(values);
    if (subtypeArticle) {
      setSubType(subtypeArticle);
    }
  }, [values.type]);

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
          name='size'
          onChange={handleInputChange}
          placeholder='Talle'
          type='text'
          value={values.size}
        />
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
        className='select'
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
        // value={value}
        name='subType'
        defaultValue={"DEFAULT"}
        className='select'
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
