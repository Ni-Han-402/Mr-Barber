import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Package.css'

const Package = ({ service }) => {
    const { id, img, name, price, description } = service;
    const navigate = useNavigate();
    const navigateCheckoutDetail = id =>{
        navigate(`/package/${id}`)
    }
    return (
        <>
            <div className="service">
                <img src={img} alt="" />
                <div className="service-content">
                    <h2>{name}</h2>
                    <p>{price}$</p>
                    <p><small>{description}</small></p>
                    <button onClick={() => navigateCheckoutDetail(id)} className='btn checkout-btn'>Checkout</button>
                </div>
            </div>
        </>
    );
};

export default Package;