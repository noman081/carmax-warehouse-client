import React, { useEffect, useState } from 'react';
import CarCategory from '../CarCategory/CarCategory';

const CarCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://carmax.herokuapp.com/car-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='container my-4'>
            <h3 className='text-center'>Car Categories</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
                {
                    categories.map(category => <CarCategory key={category._id} category={category}></CarCategory>)
                }
            </div>
        </div>
    );
};

export default CarCategories;