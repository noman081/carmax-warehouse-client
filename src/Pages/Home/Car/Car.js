import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Car = ({ car }) => {
    const { name, price, quantity, picture, description, dealer } = car;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Car; 