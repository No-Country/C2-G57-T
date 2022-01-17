import React from 'react';
import { Link } from "react-router-dom";

import redes01 from '../images/redes/redes01.jpg';
import redes02 from '../images/redes/redes02.jpg';

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
                    <img src={redes02} alt="#" />
                    <div className="icon-redes">
                        <i className="fab fa-facebook"></i>
                    </div>
                </Link>
            </div>
            <footer>
                <span>mujeresreales@gmail.com</span>
            </footer>
        </>
    )
}

export default Footer;
