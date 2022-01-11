import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export const FormRegisterProduct = ({ setValuesForm }) => {
  const { values, handleInputChange } = useForm({
    name: "",
    description: "",
    price: "",
    color: "",
    size: "",
    stock: "",
  });

  useEffect(() => {
    setValuesForm(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

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
    </form>
  );
};
