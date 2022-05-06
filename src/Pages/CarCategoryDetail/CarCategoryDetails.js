import React from 'react';
import { useParams } from 'react-router-dom';

const CarCategoryDetails = () => {
    const { name } = useParams();
    const url = `http://localhost:5000/car-categories?brand${name}`;
    return (
        <div className='text-center'>
            <h3>{name}</h3>
        </div>
    );
};

export default CarCategoryDetails;