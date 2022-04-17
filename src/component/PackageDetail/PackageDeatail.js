import React from 'react';
import { useParams } from 'react-router-dom';

const PackageDeatail = () => {
    const {packageId} = useParams();
    return (
        <div>
            <h2>welcome to {packageId}</h2>
        </div>
    );
};

export default PackageDeatail;