import React from 'react';
import { Link } from "react-router-dom";

const CardHome = ({name, img, uri}) => {
    return (
        <div className='bg-section'>
            <img src={img} alt="#" />
            <Link to={uri}>{name}</Link>
        </div>
    )
}

export default CardHome;
