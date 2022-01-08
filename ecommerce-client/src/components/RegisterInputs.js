import React from "react";
import { useForm } from "./../hooks/useForm";

const RegisterInputs = () => {
  const { values, handleInputChange, reset } = useForm({
    email: "",
    user: "",
    password: "",
    repeatPassword: "",
    city: "",
    address: "",
    cp: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("valuesregister", values);
    reset();
  };

  return (
    <form className='login__containerInput' onSubmit={handleSubmit}>
      <input
        name='email'
        placeholder='Email'
        onChange={handleInputChange}
        type='email'
        value={values.email}
      />
      <input
        name='user'
        placeholder='Nombre de Usuario'
        onChange={handleInputChange}
        type='text'
        value={values.user}
      />
      <input
        name='password'
        placeholder='Contraseña'
        onChange={handleInputChange}
        type='password'
        value={values.password}
      />
      <input
        name='repeatPassword'
        placeholder='Repetir Contraseña'
        onChange={handleInputChange}
        type='password'
        value={values.repeatPassword}
      />
      <input
        name='city'
        placeholder='Ciudad'
        onChange={handleInputChange}
        type='text'
        value={values.city}
      />
      <input
        name='address'
        placeholder='Direccion'
        onChange={handleInputChange}
        type='text'
        value={values.address}
      />
      <input
        name='cp'
        placeholder='Codigo Postal'
        onChange={handleInputChange}
        type='text'
        value={values.cp}
      />

      <div className='checkboxContainer--register'>
        <div className='checkboxContainer__campo'>
          <input type='checkbox' className='checkbox' />
          <label>Terminos y Condiciones</label>
        </div>

        <div className='checkboxContainer__campo'>
          <input type='checkbox' className='checkbox' />
          <label>Quiero Recibir Noticias</label>
        </div>
      </div>

      <input type='submit' className='login__inputSubmit' value='Registrarme' />
    </form>
  );
};

export default RegisterInputs;
