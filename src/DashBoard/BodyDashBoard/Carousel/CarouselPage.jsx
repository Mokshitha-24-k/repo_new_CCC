import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { ProductService } from './ProductService'; 


import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const CarouselPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="carousel-item p-2 text-center" style={{ width: '100%', border: 'white solid 10px' }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        padding: '10px',
                    }}
                />
                <h4 style={{ margin: '10px 0 5px', textAlign:"center"}}>{product.name}</h4>
                <p style={{ fontSize: '0.9rem' , textAlign:"center"}}>{product.description}</p>
                <p style={{ fontWeight: 'bold', color: '#333', textAlign:"center" }}>${product.price}</p>
            </div>
        );
    };

    return (
        <>
            <style>
{`
    .carousel-item-gap {
        margin-right: 20px;
    }

    .p-carousel-items .p-carousel-item:last-child {
        margin-right: 0;
    }

    
    .p-carousel-prev,
    .p-carousel-next {
        border-radius: 0 !important;
        width: 40px;
        height: 40px;
        border: 2px solid transparent;
        background-color: transparent;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: none;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    .p-carousel-prev {
        left: 10px;
    }

    .p-carousel-next {
        right: 10px;
    }

    .p-carousel-prev .pi,
    .p-carousel-next .pi {
        font-size: 1.3rem;
    }

   
    .p-carousel-prev:hover,
    .p-carousel-next:hover {
        background-color: #e0e0e0; 
    }
`}
</style>



            <div style={{ width: '100vw', overflowX: 'hidden', marginTop: '60px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Product Carousel</h2>
                <Carousel
                    value={products}
                    numVisible={5}
                    numScroll={3}
                    itemTemplate={productTemplate}
                    autoplayInterval={3000}
                    circular
                    showIndicators
                    showNavigators
                    itemClassName="carousel-item-gap"
                />
            </div>
        </>
    );
};

export default CarouselPage;
