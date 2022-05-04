import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/car/${id}`)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [])
    return (
        <div>
            <h1 className='text-center'>Update {car.name}</h1>
        </div>
    );
};

export default Inventory;