import { createContext, useReducer, useState } from "react";
import { clientAxios } from "../config/axios";
import { authReducer } from "./authReducer";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./TypesAuth";

export const UserData = createContext({
  user: null,
});

export const AuthContext = ({ children }) => {
  const user = localStorage.getItem("user");
  let isA = localStorage.getItem("isA");
  
  const initialState = {
    token: localStorage.getItem("token"),
    logged: false,
    status: false,
    isAdmin: isA,
    user: localStorage.getItem("user"),
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
      await clientAxios.post("api/users", data);
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
      console.log('resp',resp )
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

  const updateUser = async (id, value) => {
    try {
      const resp = await clientAxios.put(`api/users/${id}`, value);
      console.log("respupdate", resp);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const updatePassword = async (value) => {
    const ID = localStorage.getItem("ID");
    try {
      const resp = await clientAxios.put(`api/users/password/${ID}`, value);

      console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
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
        user,
        userRegister,
        userLogin,
        updateUser,
        updatePassword,
        logOut,
      }}
    >
      {children}
    </UserData.Provider>
  );
};
