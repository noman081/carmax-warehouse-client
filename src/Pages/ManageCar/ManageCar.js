import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCars from '../../hooks/useCars';
import ManageItem from '../ManageItem/ManageItem';
import './ManageCar.css';
const ManageCar = () => {
    const [cars] = useCars();

    return (
        <div className='container p-4'>
            <h2 className='text-center'>Manage your cars</h2>
            {
                cars.map(car => <ManageItem key={car._id} car={car}></ManageItem>)
            }

            <div className="text-center">
                <Link to='/car/add'>
                    <button className="btn btn-outline-primary mt-3 w-50">Add New Car</button>
                </Link>
            </div>
        </div>
    );
};

export default ManageCar;