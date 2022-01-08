import { createContext, useReducer, useState } from "react";
import { clientAxios } from "../config/axios";
import { authReducer } from "./authReducer";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./TypesAuth";

export const UserData = createContext({
  user: null,
});

export const AuthContext = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("token"),
    status: false,
    user: null,
    email: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  const [error, setError] = useState({
    show: false,
    msg: "",
  });

  //User register return name, email, status, uid
  const userRegister = async (data) => {
    try {
      const resp = await clientAxios.post("api/users", data);
      console.log("resp", resp);
    } catch (error) {
      const showMessage = error.response.data.errors.map(
        (message) => message.msg
      );

      setError({
        show: true,
        msg: showMessage,
      });
      setTimeout(() => {
        setError({
          show: false,
          msg: "",
        });
      }, 3000);
    }
  };

  //User login return token + data user
  const userLogin = async (data) => {
    try {
      const resp = await clientAxios.post("api/auth/login", data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: resp.data,
      });
    } catch (error) {
      setError({
        show: true,
        msg: error.response.data.msg,
      });
      setTimeout(() => {
        setError({
          show: false,
          msg: "",
        });
      }, 3000);
    }
  };

  //user logout reset state
  const logOut = () => {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  };

  return (
    <UserData.Provider
      value={{
        error,
        state,
        userRegister,
        userLogin,
        logOut,
      }}
    >
      {children}
    </UserData.Provider>
  );
};
