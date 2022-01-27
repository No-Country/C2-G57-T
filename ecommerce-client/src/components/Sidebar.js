import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserData } from "../authContext/AuthContext";
import { CartData } from "../cartContext/Cartcontext";

const Sidebar = ({ sidebar }) => {
  const { state, logOut, user } = useContext(UserData);
  const { clearCart } = useContext(CartData);

  const handleLogOut = () => {
    logOut();
    clearCart();
  };

  

  return (
    <>
      <div className='content-sidebar'>
        <div className={sidebar ? "sidebar sidebar-on" : "sidebar"}>
          <div className='icon-user-container'>
            <div className='icon-user'>
              <i className='fas fa-user'></i>
            </div>
            {state.token ? (
              <>
                <p>{user}</p>{" "}                
                <Link to={"/profile"}>
                  <button className='button-profile'>Mi perfil</button>
                </Link>
              </>
            ) : (
              <p>Usuario</p>
            )}
          </div>
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
              <ul>
                <li
                  data-bs-toggle='collapse'
                  href='#collapse-remeras'
                  role='button'
                  aria-expanded='false'
                  aria-controls='collapse-remeras'
                >
                  REMERAS <i className='fas fa-chevron-right'></i>
                </li>
                <div className='collapse' id='collapse-remeras'>
                  <ul>
                    <li>
                      <Link to={"/dress/t-shirt/con mangas"}>CON MANGAS</Link>
                    </li>
                    <li>
                      <Link to={"/dress/t-shirt/sin mangas"}>SIN MANGAS</Link>
                    </li>
                  </ul>
                </div>
                <li
                  data-bs-toggle='collapse'
                  href='#collapse-faldas'
                  role='button'
                  aria-expanded='false'
                  aria-controls='collapse-faldas'
                >
                  FALDAS <i className='fas fa-chevron-right'></i>
                </li>
                <div className='collapse' id='collapse-faldas'>
                  <ul>
                    <li>
                      <Link to={"/dress/skirt/cortas"}>CORTAS</Link>
                    </li>
                    <li>
                      <Link to={"/dress/skirt/largas"}>LARGAS</Link>
                    </li>
                  </ul>
                </div>
                <li
                  data-bs-toggle='collapse'
                  href='#collapse-vestidos'
                  role='button'
                  aria-expanded='false'
                  aria-controls='collapse-vestidos'
                >
                  VESTIDOS <i className='fas fa-chevron-right'></i>
                </li>
                <div className='collapse' id='collapse-vestidos'>
                  <ul>
                    <li>
                      <Link to={"/dress/dress/de dia"}>DE DIA</Link>
                    </li>
                    <li>
                      <Link to={"/dress/dress/de noche"}>DE NOCHE</Link>
                    </li>
                  </ul>
                </div>
                <li
                  data-bs-toggle='collapse'
                  href='#collapse-pantalones'
                  role='button'
                  aria-expanded='false'
                  aria-controls='collapse-pantalones'
                >
                  PANTALONES <i className='fas fa-chevron-right'></i>
                </li>
                <div className='collapse' id='collapse-pantalones'>
                  <ul>
                    <li>
                      <Link to={"/dress/pant/jeans"}>JEANS</Link>
                    </li>
                    <li>
                      <Link to={"/dress/pant/calzas"}>CALZAS</Link>
                    </li>
                  </ul>
                </div>
              </ul>

            <li>
              <Link to={"dress/product/destacados"}>DESTACADOS</Link>
            </li>
            <li>
              <Link to={"dress/product/discount"}>OFERTAS</Link>
            </li>
            {state.isAdmin && (
              <li>
                <Link to={"/registerproducts"}>
                  INGRESAR PRODUCTOS A LA TIENDA
                </Link>
              </li>
            )}
            <br></br>
            <li>
              <Link to={"/login"}>
                INGRESAR / <span onClick={handleLogOut}>CERRAR SESION</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
