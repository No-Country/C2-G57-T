import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "./../hooks/useForm";
import { UserData } from "../authContext/AuthContext";

const LoginInputs = () => {
  const { error, userLogin } = useContext(UserData);

  const { values, handleInputChange, reset } = useForm({
    email: "c@c.com",
    password: "123123",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    userLogin(values);
    reset();
  };

  return (
    <form
      autoComplete='off'
      className='login__containerInput'
      onSubmit={handleSubmit}
    >
      {error.show && <p className='banner__error'>{error.msg}</p>}
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
