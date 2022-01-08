import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "./../hooks/useForm";

const LoginInputs = () => {
  const { values, handleInputChange, reset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("valueslogin", values);
    reset();
  };

  return (
    <form
      autoComplete='off'
      className='login__containerInput'
      onSubmit={handleSubmit}
    >
      <input
        name='email'
        onChange={handleInputChange}
        placeholder='Email'
        type='email'
        value={values.email}
      />
      <input
        name='password'
        onChange={handleInputChange}
        placeholder='Contraseña'
        type='password'
        value={values.password}
      />
      <div className='login__forgotPass'>
        <div className='checkboxContainer'>
          <input type='checkbox' className='checkbox' />
          <label>Recordar</label>
        </div>
        <Link to='#'>Olvidaste la contraseña?</Link>
      </div>
      <input type='submit' className='login__inputSubmit' value='ingresar' />
    </form>
  );
};

export default LoginInputs;
