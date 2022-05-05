import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Car from '../Car/Car';

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://carmax.herokuapp.com/cars?home=true')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);

    return (
        <div className='container my-3'>
            <h3 className='text-center'>Car Collection</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    cars.map(car => <Car key={car.name} car={car}></Car>)
                }
            </div>
        </div>
    );
};

export default Cars;