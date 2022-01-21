import React, { useContext } from "react";
import { UserData } from "../authContext/AuthContext";
import { useForm } from "./../hooks/useForm";

export const Profile = ({ type }) => {
  const { state } = useContext(UserData);
  const { values, handleInputChange, reset } = useForm({
    userName: state.user || "",
    email: state.email || "",
    password: "",
    name: "",
    surname: "",
    city: "",
    address: "",
    cp: "",
    pay: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("values", values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container__page'>
        <div className='profile__page'>
          <div className='profile__container'>
            <div className='profile__fieldContainer'>
              <p>Tu perfil</p>
              <input
                name='userName'
                placeholder='Nombre de Usuario'
                onChange={handleInputChange}
                type='text'
                value={values.userName}
              />
              <input
                name='email'
                onChange={handleInputChange}
                placeholder='Email'
                type='text'
                value={values.email}
              />
              {!type && (
                <input
                  placeholder='Contraseña'
                  name='password'
                  type='password'
                  onChange={handleInputChange}
                  value={values.password}
                />
              )}
            </div>
            <div className='profile__fieldContainer'>
              <p>Datos personales</p>
              <input
                name='name'
                type='text'
                onChange={handleInputChange}
                placeholder='Nombre'
                value={values.name}
              />
              <input
                name='surname'
                onChange={handleInputChange}
                placeholder='Apellido'
                type='text'
                value={values.surname}
              />
              <input
                name='city'
                onChange={handleInputChange}
                placeholder='Ciudad'
                type='text'
                value={values.city}
              />
              <input
                name='address'
                onChange={handleInputChange}
                placeholder='Direccion'
                type='text'
                value={values.address}
              />
              <input
                placeholder='Codigo postal'
                name='cp'
                value={values.cp}
                type='number'
                onChange={handleInputChange}
              />
            </div>

            <div className='profile__fieldContainer'>
              <p>Medios de pago</p>
              <input
                placeholder='Tarjeta de Credito'
                name='pay'
                value={values.pay}
                type='number'
                onChange={handleInputChange}
              />
            </div>
            <input
              type='submit'
              className='profile__inputSubmit'
              value='Actualizar perfil'
            />
          </div>
        </div>
      </div>
    </form>
  );
};
