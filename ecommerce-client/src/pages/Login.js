import React, { useState } from "react";
import LoginInputs from "../components/LoginInputs";
import RegisterInputs from "../components/RegisterInputs";

const Login = () => {
  //selector de solapa
  const [selectFlap, setSelectFlap] = useState("login");

  return (
    <div className=' login'>
      <div className='container__page'>
        <div className='login__container'>
          <input
            type='submit'
            value='Ingresar'            
            className={selectFlap === "login" ? 'login__flap login__flap--active' : 'login__flap'}
            onClick={() => setSelectFlap("login")}
          />
          <input
            type='submit'
            value='Registro'
            className={selectFlap === "register" ? 'login__flap login__flap--active' : 'login__flap'}
            onClick={() => setSelectFlap("register")}
          />
        </div>

        {selectFlap === "login" ? <LoginInputs /> : <RegisterInputs />}
      </div>
    </div>
  );
};

export default Login;
