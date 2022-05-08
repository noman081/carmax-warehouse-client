import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddCar = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const handleAddCar = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const brand = event.target.brand.value;
        const price = event.target.price.value;
        const picture = event.target.image.value;
        const dealer = event.target.dealer.value;
        const quantity = parseInt(event.target.quantity.value);
        const description = event.target.description.value;

        const car = { name, brand, price, picture, dealer, quantity, email, description }
        // console.log(car);
        axios.post('https://carmax.herokuapp.com/cars', car)
            .then(result => {
                // console.log(result);
                toast.success('Car added successfully!!');
                event.target.reset();
            });
    }
    return (
        <div className='container my-3'>
            <h3 className='text-center'>Add a new car</h3>
            <form onSubmit={handleAddCar} className="row g-3 needs-validation bg-light p-3 mt-3 shadow-lg rounded rounded-3" >
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Car Name</label>
                    <input name='name' type="text" className="form-control" id="validationCustom01" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Brand</label>
                    <input name='brand' type="text" className="form-control" id="validationCustom02" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Price</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">$</span>
                        <input name='price' type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please enter a price.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Image url</label>
                    <input name='image' type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a valid image.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom03" className="form-label">Dealer</label>
                    <input name='dealer' type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a valid Dealer.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom03" className="form-label">Quantity</label>
                    <input name='quantity' type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a valid Quantity.
                    </div>
                </div>

                <div className="col-md-12">
                    <label htmlFor="validationCustom05" className="form-label">Description</label>
                    <textarea name='description' type="text" className="form-control" id="validationCustom05" required />
                    <div className="invalid-feedback">
                        Please provide a valid description.
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Add item</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddCar;