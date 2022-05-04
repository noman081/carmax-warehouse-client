import React from 'react';
import { useNavigate } from 'react-router-dom';

const Car = ({ car }) => {
    const { _id, name, price, quantity, picture, description, dealer } = car;
    const navigate = useNavigate();
    const handleUpdateButton = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className="col">
            <div className="card h-100 shadow-lg">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{name}</h5>
                    <h6>Price: {price}</h6>
                    <p className='d-flex justify-content-between'>
                        <span><strong>Supplier:</strong> {dealer}</span>
                        <span className='me-5'><strong>Quantity:</strong> {quantity}</span>
                    </p>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-primary mt-auto" onClick={() => handleUpdateButton(_id)}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Car; 