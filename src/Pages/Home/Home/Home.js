import React from 'react';
import CarCategories from '../../CarCategories/CarCategories';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cars></Cars>
            <CarCategories></CarCategories>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;