import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="icon-user">
        <i class="far fa-user"></i>
      </div>
      <ul>
        <li><Link to={'/'}>HOME</Link></li>
        <li data-bs-toggle="collapse" href="#collapse-indumentaria" role="button" aria-expanded="false" aria-controls="collapse-indumentaria">INDUMENTARIA <i class="fas fa-chevron-right"></i></li>
        <div className="collapse" id="collapse-indumentaria">
          <ul>
            <li data-bs-toggle="collapse" href="#collapse-remeras" role="button" aria-expanded="false" aria-controls="collapse-remeras">REMERAS <i class="fas fa-chevron-right"></i></li>
            <div class="collapse" id="collapse-remeras">
              <ul>
                <li>
                  <Link to={'#'}>CON MANGAS</Link>
                </li>
                <li>
                  <Link to={'#'}>SIN MANGAS</Link>
                </li>
                <li>
                  <Link to={'#'}>MANGA LARGA</Link>
                </li>
              </ul>
            </div>
            <li data-bs-toggle="collapse" href="#collapse-faldas" role="button" aria-expanded="false" aria-controls="collapse-faldas">FALDAS <i class="fas fa-chevron-right"></i></li>
            <div class="collapse" id="collapse-faldas">
              <ul>
                <li>
                  <Link to={'#'}>CORTAS</Link>
                </li>
                <li>
                  <Link to={'#'}>LARGAS</Link>
                </li>
              </ul>
            </div>
            <li data-bs-toggle="collapse" href="#collapse-vestidos" role="button" aria-expanded="false" aria-controls="collapse-vestidos">VESTIDOS <i class="fas fa-chevron-right"></i></li>
            <div class="collapse" id="collapse-vestidos">
              <ul>
                <li>
                  <Link to={'#'}>DE DIA</Link>
                </li>
                <li>
                  <Link to={'#'}>DE NOCHE</Link>
                </li>
              </ul>
            </div>
            <li data-bs-toggle="collapse" href="#collapse-pantalones" role="button" aria-expanded="false" aria-controls="collapse-pantalones">PANTALONES <i class="fas fa-chevron-right"></i></li>
            <div class="collapse" id="collapse-pantalones">
              <ul>
                <li>
                  <Link to={'#'}>JEANS</Link>
                </li>
                <li>
                  <Link to={'#'}>DE MORLEY</Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <li data-bs-toggle="collapse" href="#collapse-accesorios" role="button" aria-expanded="false" aria-controls="collapse-accesorios">ACCESORIOS <i class="fas fa-chevron-right"></i></li>
        <div class="collapse" id="collapse-accesorios">
              <ul>
                <li>
                  <Link to={'#'}>AROS</Link>
                </li>
                <li>
                  <Link to={'#'}>COLLARES</Link>
                </li>
              </ul>
            </div>
        <li><Link to={'#'}>PRODUCTOS DESTACADOS</Link></li>
        <li><Link to={'#'}>OFERTAS</Link></li>
        <li><Link to={'#'}>CONTACTO</Link></li>
        <li><Link to={'/login'}>INGRESAR / CERRAR SESION</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
