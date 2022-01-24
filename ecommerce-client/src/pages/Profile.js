import React, { useContext, useEffect, useState } from "react";
import { UserData } from "../authContext/AuthContext";
import { clientAxios } from "../config/axios";
import { Formik } from "formik";
import { EndBuyData } from "../endBuyContext/EndBuyContext";
import { ChangePassword } from "../components/ChangePassword";

export const Profile = ({ type }) => {
  const [dataUser, setDataUser] = useState("");
  const { updateUser } = useContext(UserData);
  const { addDataUser } = useContext(EndBuyData);

  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem("ID");
      const { data } = await clientAxios.get(`/api/users/${id}`);
      setDataUser(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    addDataUser(dataUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUser]);

  if (!dataUser) return null;

  return (
    <>
      <Formik
        // validationSchema={validationSchema}
        enableReinitialize
        initialValues={dataUser}
        onSubmit={async (values) => {
          console.log("submit", values);
          try {
            const id = localStorage.getItem("ID");
            updateUser(id, values);
            setDataUser(values);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(props) => {
          return (
            <form onSubmit={props.handleSubmit}>
              <div className='container__page'>
                <div className='profile__page'>
                  <div className='profile__container'>
                    <div className='profile__fieldContainer'>
                      <p>Tu perfil</p>

                      <input
                        name='email'
                        onChange={props.handleChange}
                        placeholder={!dataUser.email ? "Email" : dataUser.email}
                        type='text'
                        value={props.values.email}
                      />
                    </div>
                    <div className='profile__fieldContainer'>
                      <p>Datos personales</p>
                      <input
                        name='name'
                        type='text'
                        onChange={props.handleChange}
                        placeholder='Nombre'
                        value={props.values.name}
                      />
                      {/* <input
                name='surname'
                onChange={props.handleChange}
                placeholder='Apellido'
                type='text'
                value={props.values.surname}
              /> */}
                      <input
                        name='city'
                        onChange={props.handleChange}
                        placeholder='Ciudad'
                        type='text'
                        value={props.values.city}
                      />
                      <input
                        name='address'
                        onChange={props.handleChange}
                        placeholder='Direccion'
                        type='text'
                        value={props.values.address}
                      />
                      <input
                        placeholder='Codigo postal'
                        name='postalcode'
                        value={props.values.postalcode}
                        type='number'
                        onChange={props.handleChange}
                      />
                    </div>
                    {/* <div className='profile__fieldContainer'>
              <p>Medios de pago</p>
              <input
                placeholder='Tarjeta de Credito'
                name='pay'
                value={props.values.pay}
                type='number'
                onChange={props.handleChange}
              />
            </div> */}
                    <input
                      type='submit'
                      className='profile__inputSubmit'
                      value='Actualizar perfil'
                    />
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
      {!type && <ChangePassword />}
    </>
  );
};
