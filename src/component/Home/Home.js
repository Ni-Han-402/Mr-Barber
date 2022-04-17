import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Package from '../Package/Package';
import './Home.css'

const Home = () => {
    const [ packages, setPackages] = useState([]);

    useEffect( () =>{
        fetch('packages.json')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <div className="title">
                    <h1>Packages</h1>
                </div>
                <div className="packages-container">
                    {
                        packages.map(service => <Package
                        key={service.id}
                        service={service}
                        ></Package>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;