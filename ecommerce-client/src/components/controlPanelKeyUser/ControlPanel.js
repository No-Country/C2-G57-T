import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterProductData } from "./../../registerProductContext/RegisterProductContext";
import { useForm } from "./../../hooks/useForm";

//panel de control para borrar o actualizar un producto
export const ControlPanel = ({ dataProductView }) => {
  const navigate = useNavigate();
  const [showFormUpdate, setShowFormUpdate] = useState(false);

  const { deleteProduct } = useContext(RegisterProductData);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    navigate(-1, { replace: true });
  };

  return (
    <>
      <div className='controlPanel'>
        <div className='container-button-form'>
          <button
            onClick={() => handleDelete(dataProductView._id)}
            className='generalButton'
          >
            Borrar articulo
          </button>
        </div>
        <div className='container-button-form'>
          <button
            onClick={() => setShowFormUpdate(!showFormUpdate)}
            className='generalButton'
          >
            {showFormUpdate ? "Cerrar panel" : "Actualizar articulo"}
          </button>
        </div>
      </div>

      {showFormUpdate && (
        <FormUpdate
          dataProductView={dataProductView}
          setShowFormUpdate={setShowFormUpdate}
        />
      )}
    </>
  );
};


//formulario para actualizar producto
const FormUpdate = ({ dataProductView, setShowFormUpdate }) => {
  const { updateProduct } = useContext(RegisterProductData);
  const { values, handleInputChange } = useForm();
  const [productCurrent, setProductCurrent] = useState({
    name: dataProductView.name,
    description: dataProductView.description,
    price: dataProductView.price,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductCurrent({
      ...productCurrent,
      values,
    });
    updateProduct(dataProductView._id, values);
    setShowFormUpdate(false);
  };

  return (
    <form onSubmit={handleSubmit} className='formUpdate'>
      <label>Producto</label>
      <input
        type='text'
        className='generalInput'
        value={!values.name ? productCurrent.name : values.name}
        onChange={handleInputChange}
        name='name'
      />
      <label>Descripcion</label>
      <textarea
        type='text'
        className='generalInput'
        value={
          !values.description ? productCurrent.description : values.description
        }
        onChange={handleInputChange}
        name='description'
      />
      <label>Precio</label>
      <input
        type='number'
        className='generalInput'
        value={!values.price ? productCurrent.price : values.price}
        onChange={handleInputChange}
        name='price'
        min='0'
      />
      <input
        type='submit'
        value='Actualizar articulo'
        className='generalButton'
      />
    </form>
  );
};
