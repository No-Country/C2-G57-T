import React from 'react';
import { Link } from 'react-router-dom';

// components
import ProductDetail from '../components/Layouts/ProductDetail';

// images
import detail01 from '../images/detailprod/detail01.jpg';
import detail02 from '../images/detailprod/detail02.jpg';
import detail03 from '../images/detailprod/detail03.jpg';

const Images = ({img}) => {
    return (
        <>
            <img src={img} alt="#" />
        </>
    )
}

const ProdDetail = () => {
    return (
        <div className='container__page'>
            <ProductDetail firstimage={detail02} name={'VESTIDO PINK'} price={'15.000'}>
                <Images img={detail01} />
                <Images img={detail02} />
                <Images img={detail03} />
            </ProductDetail>
            <div className="redes-prod">
                <h4>COMPARTIR:</h4>
                <div className="icons-redes">
                    <Link to={'#'}>
                        <i className="fab fa-instagram"></i>
                        <p>INSTAGRAM</p>
                    </Link>
                    <Link to={'#'}>
                        <i className="fab fa-facebook"></i>
                        <p>FACEBOOK</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProdDetail;
