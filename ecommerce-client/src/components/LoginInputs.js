import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "./../hooks/useForm";
import { clientAxios } from "./../config/axios";

const LoginInputs = () => {
  const [error, setError] = useState(false);

  const { values, handleInputChange, reset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("valueslogin", values);
    try {
      const { data } = await clientAxios.post("api/auth/login", values);

      console.log("resp", data);

      localStorage.setItem("token", data.token);
    } catch (error) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
    }

    reset();
  };

  return (
    
      <form
        autoComplete='off'
        className='login__containerInput'
        onSubmit={handleSubmit}
      >
      {error && <p className="banner__error">Usuario o Contraseña incorrecta</p>}
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
