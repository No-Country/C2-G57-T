import React from 'react';

// images
import banner01 from '../images/banners/banner01.jpg';
import banner02 from '../images/banners/banner02.jpg';
import banner03 from '../images/banners/banner03.jpg';

const Carousel = () => {
    return (
        <>
            <div id="carousel-home" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel-home" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel-home" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel-home" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner01} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner02} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner03} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel-home" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel-home" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel;
