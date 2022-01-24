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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Contraseña'
          onChange={handleInputChange}
          value={values.currentPassword}
          name='currentPassword'
          type="password"
        />
        <input
          placeholder='Nueva Contraseña'
          onChange={handleInputChange}
          value={values.newPassword}
          name='newPassword'
          type="password"
        />
        <input type='submit' value='Cambiar Contraseña' />
      </form>
    </div>
  );
};
