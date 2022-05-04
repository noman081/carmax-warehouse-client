import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/car/${id}`)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [car]);

    const handleDeliver = () => {
        const url = `http://localhost:5000/car/${id}?quantity=${car.quantity}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
        console.log(url);
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Update {car.name}</h1>
            <div className='d-flex justify-content-between align-items-center border w-75 mx-auto p-4 rounded-3 shadow-lg mt-5 bg-white'>
                <div>
                    <img src={car.picture} alt="" />
                </div>
                <div className='ms-3'>
                    <h4>{car.name}</h4>
                    <h5>Price: {car.price}</h5>
                    <p className='mb-0'><strong>Supplier:</strong> {car.dealer}</p>
                    <p className='mb-1'><strong>Quantity:</strong> {car.quantity}</p>
                    <p>{car.description}</p>

                    <button className="btn btn-outline-primary w-75" onClick={handleDeliver}>Deliver</button>

                </div>
            </div>
        </div>
    );
};

export default Inventory;