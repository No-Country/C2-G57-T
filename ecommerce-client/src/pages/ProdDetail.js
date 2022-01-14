import React from 'react';
import { Link } from 'react-router-dom';

// components
import ProductDetail from '../components/Layouts/ProductDetail';
import Product from '../components/Layouts/Product'; 

// images
import detail01 from '../images/detailprod/detail01.jpg';
import detail02 from '../images/detailprod/detail02.jpg';
import detail03 from '../images/detailprod/detail03.jpg';
import prod01 from '../images/products/prod01.jpg';
import prod02 from '../images/products/prod02.jpg';
import prod03 from '../images/products/prod03.jpg';

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
            <div className="container-prod-detail">
                <ProductDetail firstimage={detail02} name={'VESTIDO PINK'} price={'15.000'}>
                    <Images img={detail01} />
                    <Images img={detail02} />
                    <Images img={detail03} />
                </ProductDetail>

                <div className="product-relacionados">
                    <h2>PRODUCTOS SIMILARES</h2>
                    <section className="dress-products">
                        <Product id='/' img={prod01} title={'VESTIDO PINK'} price={'15.000'}/>
                        <Product id='/' img={prod02} title={'VESTIDO PINK'} price={'15.000'}/>
                        <Product id='/' img={prod03} title={'VESTIDO PINK'} price={'15.000'}/>
                    </section>
                </div>
                {/* <div className="redes-prod">
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
                </div> */}
            </div>
        </div>
    )
}

export default ProdDetail;
