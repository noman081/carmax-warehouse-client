import React, { useEffect, useState } from 'react';
import './ManageCar.css';
const ManageCar = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);
    return (
        <div className='container p-4'>
            <h2 className='text-center'>Manage your cars</h2>
            {
                cars.map(car => <div className='manage-car'>
                    <div className='d-flex justify-content-between align-items-center p-2 px-5 mb-3'>
                        <h5>{car.name} </h5>
                        <button className="btn btn-primary">Delete</button>

                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageCar;