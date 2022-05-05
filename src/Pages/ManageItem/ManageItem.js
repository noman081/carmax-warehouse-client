import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useCars from '../../hooks/useCars';

const ManageItem = ({ car }) => {
    const { _id, name, picture } = car;
    const [cars, setCars] = useCars();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`https://carmax.herokuapp.com/car/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const rest = cars.filter(car => car._id !== id);
                    setCars(rest);
                    toast.success('Item deleted successfully!');
                })
        }
    }
    return (
        <div className='manage-car'>
            <div className='d-flex justify-content-between align-items-center p-2 px-5 mb-3'>
                <h5>{name} <img src={picture} alt="" width={80} className='rounded-pill' /></h5>
                <button className="btn btn-primary" onClick={() => handleDelete(_id)}>Delete</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ManageItem;