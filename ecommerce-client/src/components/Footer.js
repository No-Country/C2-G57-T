import React from 'react';

import redes01 from '../images/redes/redes01.jpg';
import redes02 from '../images/redes/redes02.jpg';

import CardRedes from "../components/CardRedes";

const Footer = () => {
    return (
        <>
            <div className="container__page sections-home redes-home">
                <CardRedes img={redes01}>
                    <i className="fab fa-instagram"></i>
                </CardRedes>
                <CardRedes img={redes02}>
                    <i className="fab fa-facebook"></i>
                </CardRedes>
            </div>
            <footer>
                <h1>footer</h1>
            </footer>
        </>
    )
}

export default Footer;
