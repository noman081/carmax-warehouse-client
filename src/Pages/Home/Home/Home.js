import React from 'react';
import CarCategories from '../../CarCategories/CarCategories';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cars></Cars>
            <CarCategories></CarCategories>
        </div>
    );
};

export default Home;