import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CarCategory.css';

const CarCategory = ({ category }) => {
    const { name, picture } = category;
    const navigate = useNavigate();
    const handleCategory = () => {
        navigate(`/category/${name}`);
    }
    return (
        <div className="col">
            <div className="card h-100 text-center category" onClick={handleCategory}>
                <img src={picture} className="card-img-top mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default CarCategory;