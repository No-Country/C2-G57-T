import React from 'react';
import { Link } from "react-router-dom";

import redes01 from '../images/redes/redes01.jpg';
import redes02 from '../images/redes/redes02.jpg';
import logo from "../images/logo.png";

const Footer = () => {
    return (
        <>
            <div className="container__page redes-home">
                <Link to={'#'} className='bg-redes'>
                    <img src={redes01} alt="#" />
                    <div className="icon-redes">
                        <i className="fab fa-instagram"></i>
                    </div>
                </Link>
                <Link to={'#'} className='bg-redes'>
                    <img src={redes02} alt="#" className='img-bg-redes' />
                    <div className="icon-redes">
                        <i className="fab fa-facebook"></i>
                    </div>
                </Link>
            </div>
            <footer>
                <div className='containerfooter'>
                <div className='boxfooter'> <i className="fab fa-facebook"> </i> Facebook <br></br>
                <i className="fab fa-instagram"></i> Instagram<br></br>
                <i className="fab fa-whatsapp"></i>  342596875<br></br>
                <i className="far fa-envelope"></i> mujeresreales@gmail.com
               <div>Av. Belgrano 1930</div> 
               <div>Córdoba, Arg.</div>
                </div>
                <div className='boxfooter'><Link to={"/"}>
          {<img id='logo' src={logo} alt='logo' />}
        </Link>
        </div>
                <div className='boxfooter'>
                    <div><Link to={'/'}>Home</Link></div> 
                    <div><Link to={'dress/product/destacados'}>Destacados</Link></div>
                     <div><Link to={'dress/product/discount'}>Ofertas</Link></div>
                      <div><Link to={'/login'}>Ingresar</Link></div>
                </div>
                
                </div>
                
            </footer>
        </>
    )
}

export default Footer;
