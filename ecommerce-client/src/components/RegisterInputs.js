import React, { useContext } from "react";
import { UserData } from "../authContext/AuthContext";
import { useForm } from "./../hooks/useForm";

const RegisterInputs = () => {
  const { values, handleInputChange, reset } = useForm({
    email: "c@c.com",
    name: "Pedro",
    password: "123123",
    repeatPassword: "123123",
  });

  const { error, userRegister } = useContext(UserData);

  const handleSubmit = (e) => {
    e.preventDefault();

    userRegister(values);
    reset();
  };

  return (
    <form className='login__containerInput' onSubmit={handleSubmit}>
      {error.show && <p className='banner__error'>{error.msg}</p>}
      <input
        name='email'
        placeholder='Email'
        onChange={handleInputChange}
        type='email'
        value={values.email}
      />
      <input
        name='name'
        placeholder='Nombre de Usuario'
        onChange={handleInputChange}
        type='text'
        value={values.name}
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

      <input type='submit' className='login__inputSubmit' value='Registrarme' />
    </form>
  );
};

export default RegisterInputs;
