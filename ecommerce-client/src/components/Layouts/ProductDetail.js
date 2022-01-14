import React from 'react';

const ProductDetail = ({children, firstimage, name, price}) => {
    return (
        <div className='product-detail'>
            <div className="image-detail">
                <img src={firstimage} alt="#" />
                <div className="images">
                    {children}
                </div>
            </div>
            <div className="description">
                <div className="prices">
                    <h6>{name}</h6>
                    <h6>${price}</h6>
                </div>
                <div className="colors">
                    <span>COLORES</span>
                    
                </div>
                <div className="talles">
                    <span>TALLES</span>
                </div>
                <label htmlFor="cant">CANTIDAD</label>
                <input type="number" id='cant'/>

                <button>COMPRAR <i className="fas fa-shopping-cart"></i></button>
            </div>
        </div>
    )
}

export default ProductDetail;

