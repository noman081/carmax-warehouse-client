import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const Inventory = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    useEffect(() => {
        fetch(`https://carmax.herokuapp.com/car/${id}`)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [car]);

    const handleDeliver = () => {
        const url = `https://carmax.herokuapp.com/car/${id}?quantity=${car.quantity}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Car delivered successfully!');
            });
    }
    const handleAddStock = event => {
        event.preventDefault();
        const addedStock = event.target.stock.value;
        const url = `https://carmax.herokuapp.com/car/${id}?quantity=${car.quantity}&add=${addedStock}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
                toast.success('Car added successfully!');
            });
    }
    return (
        <div className='container mb-3'>
            <h1 className='text-center'>Update {car.name}</h1>
            <div className='d-lg-flex justify-content-between align-items-center border w-75 mx-auto p-4 rounded-3 shadow-lg mt-3 bg-white'>
                <div className='text-center'>
                    <img src={car.picture} alt="" />
                </div>
                <div className='ms-3'>
                    <h4>{car.name}</h4>
                    <h5>Price: {car.price}</h5>
                    <p className='mb-0'><strong>Supplier:</strong> {car.dealer}</p>
                    <p className='mb-1'><strong>Quantity:</strong> {car.quantity}</p>
                    <p>{car.description}</p>

                    <button className="btn btn-outline-primary w-75" onClick={handleDeliver}>Deliver</button>

                    <Form className='mt-3' onSubmit={handleAddStock}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><strong>Add New stock</strong></Form.Label>
                            <Form.Control className='w-75' type='text' placeholder="Add new stock" name='stock' required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add stock
                        </Button>
                    </Form>
                    <hr className='mx-auto' />
                    <Link to='/car/manage'>
                        <button className="btn btn-outline-primary mt-3 w-100">Manage Inventory</button>
                    </Link>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Inventory;