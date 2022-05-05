import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ManageItem from '../ManageItem/ManageItem';
const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const url = `http://localhost:5000/cars?email=${email}`;
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return (
        <div>
            {
                !cars.length ?
                    <div className='text-center'>
                        <h3>You didn't add any item</h3>
                    </div>
                    :
                    <div className='container my-3'>
                        <h3 className="text-center">My Items</h3>
                        {
                            cars.map(car => <ManageItem key={car._id} car={car}></ManageItem>)
                        }
                    </div>
            }
        </div>
    );
};

export default MyItems;