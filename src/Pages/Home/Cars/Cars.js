import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Car from '../Car/Car';

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);

    return (
        <div className='container'>
            <h1>Car Collection</h1>
            <h2>I have {cars.length} cars</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    cars.map(car => <Car key={car.name} car={car}></Car>)
                }
            </div>
        </div>
    );
};

export default Cars;