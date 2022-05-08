import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import contact from '../../../images/contact.svg';

const ContactUs = () => {
    const handleContactUs = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;

        const contact = { name, email, subject, message };
        console.log(contact);

        axios.post('https://carmax.herokuapp.com/contact', contact)
            .then(result => {
                console.log(result);
                toast.success('Messeage has sent. We will contact you soon!');
                event.target.reset();
            })
    }
    return (
        <div className="container my-4 pb-3">
            <h1 className='text-center'>Contact Us</h1>
            <div className='mt-5 d-lg-flex justify-content-around align-items-center'>
                <div className='text-sm-center me-3 mx-sm-auto'>
                    <h2>We'd love to hear from you!</h2>
                    <p>Whether you have question about features, pricing, trials, need a demo, or anything else, our team is ready to answer all your question.</p>
                    <img src={contact} alt="" width='50%' />
                </div>
                <div className='border p-4 bg-light w-75 mx-sm-auto rounded rounded-3'>
                    <Form onSubmit={handleContactUs}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" name="name" placeholder="Your Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="email" name="email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Subject<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" name="subject" placeholder="Subject" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="textarea" name="message" placeholder="Message" required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Send Message
                        </Button>
                    </Form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ContactUs;