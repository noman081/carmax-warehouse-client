import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Car = ({ car }) => {
    const { name, price, quantity, picture, description, dealer } = car;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={picture} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Car; 