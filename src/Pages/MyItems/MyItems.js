import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ManageItem from '../ManageItem/ManageItem';
const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const url = `https://carmax.herokuapp.com/myitem?email=${email}`;
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getMyItems = async () => {
            try {
                await fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => setCars(data));
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/signin');
                }
            }
        }
        getMyItems();
    }, [cars])
    return (
        <div>
            {
                !cars.length ?
                    <div className='text-center my-5 p-5 text-danger'>
                        <h3>You didn't add any item :(</h3>
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