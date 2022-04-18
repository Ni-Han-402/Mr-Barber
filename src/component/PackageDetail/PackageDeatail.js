
import { Link, useParams } from 'react-router-dom';
import './PackageDeatail'

const PackageDeatail = () => {
    const {packageId} = useParams();

    return (
        <>
            <div className="container">
            <div className="package-part">
                <h3>Package Number: {packageId}</h3>
            </div>
            <Link to={'/checkout'}><button className='btn'>CHECKOUT</button></Link>
            </div>
            
        </>
    );
};

export default PackageDeatail;