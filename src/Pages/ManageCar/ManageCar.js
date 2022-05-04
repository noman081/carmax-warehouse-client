import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ManageCar.css';
const ManageCar = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/car/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const rest = cars.filter(car => car._id !== id);
                    setCars(rest);
                })
        }
    }
    return (
        <div className='container p-4'>
            <h2 className='text-center'>Manage your cars</h2>
            {
                cars.map(car => <div className='manage-car'>
                    <div className='d-flex justify-content-between align-items-center p-2 px-5 mb-3'>
                        <h5>{car.name} <img src={car.picture} alt="" width={80} className='rounded-pill' /></h5>
                        <button className="btn btn-primary" onClick={() => handleDelete(car._id)}>Delete</button>

                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageCar;