import React, {useContext} from "react";
import { UserData } from "../authContext/AuthContext";
import { useForm } from "../hooks/useForm";

export const ChangePassword = () => {

    const {updatePassword} = useContext(UserData);

  const { values, handleInputChange, reset } = useForm({
    currentPassword: "",
    newPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values", values);
    updatePassword(values)
    reset()
  };
  
  return (
    <div className="change-password">
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Contraseña'
          onChange={handleInputChange}
          value={values.currentPassword}
          name='currentPassword'
          type="password"
          className="generalInput"
        />
        <input
          placeholder='Nueva Contraseña'
          onChange={handleInputChange}
          value={values.newPassword}
          name='newPassword'
          type="password"
          className="generalInput"
        />
        <input type='submit' value='Cambiar Contraseña' className="generalButton"/>
      </form>
    </div>
  );
};
