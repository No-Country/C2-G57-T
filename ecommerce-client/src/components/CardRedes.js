import React from 'react';
import { Link } from "react-router-dom";

const CardRedes = ({children, img}) => {
    return (
        <Link to={"#"} className='bg-redes'>
            <img src={img} alt="#" />
            <div className="icon-redes">
                {children}
            </div>
        </Link>
    )
}

export default CardRedes;
