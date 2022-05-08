import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Car from '../Home/Car/Car';

const CarCategoryDetails = () => {
    const { name } = useParams();
    const url = `https://carmax.herokuapp.com/cars?brand=${name}`;
    // console.log(url);
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);
    return (
        <div className='container my-4'>
            <h3 className='text-center'>{name}</h3>
            {
                cars.length ?
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            cars.map(car => <Car key={car._id} car={car}></Car>)
                        }
                    </div>
                    :
                    <h5 className='my-5 text-center text-danger'>Sorry! There is no {name} in stock!</h5>
            }
        </div>
    );
};

export default CarCategoryDetails;