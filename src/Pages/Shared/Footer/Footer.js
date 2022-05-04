import React from 'react';

const Footer = () => {
    const today = new Date();
    return (
        <div className='bg-dark text-white p-3 text-center mt-auto'>
            <p>Copyright &copy; Abdullah Al Noman, {today.getFullYear()} </p>
        </div>
    );
};

export default Footer;