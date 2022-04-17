import React from 'react';
import './Package.css'

const Package = ({service}) => {
    const {img, name, price, description }= service;
    return (
        <>
            <div className="service">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{price}$</p>
                <p><small>{description}</small></p>
                <button className='btn checkout-btn'>Checkout</button>
            </div>
        </>
    );
};

export default Package;