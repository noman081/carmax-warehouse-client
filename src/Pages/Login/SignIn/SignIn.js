import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import MySpinner from '../../Shared/Spinner/MySpinner';
import SocailLogin from '../SocailLogin/SocailLogin';

const SignIn = () => {
    const myStyle = {
        backgroundImage:
            "url('https://i.ibb.co/JBVzc1y/bg-01.jpg')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignInForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        <MySpinner></MySpinner>
    }
    const [email, setEmail] = useState('');
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    function validateEmail(myEmail) {
        var re = /\S+@\S+\.\S+/;
        return re.test(myEmail);
    }
    const handlePasswordReset = () => {
        const emailCheck = validateEmail(email);
        if (!emailCheck) {
            toast.warn('Please enter a valid email to reset password');
        }
        else {
            sendPasswordResetEmail(email);
            toast.success('Password reset email is sent!');
        }
    }

    return (
        <div style={myStyle} className='pt-5'>
            <div className='container bg-light py-4 px-5 rounded-3 shadow-lg signin-form'>
                <Form onSubmit={handleSignInForm} className='mb-2'>
                    <h1 className='text-center'>Sign In</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleEmail} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='d-flex justify-content-between align-items-center'><span>Password</span><p className="btn btn-link text-decoration-none" onClick={handlePasswordReset}>Forgot Password?</p></Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' required />
                    </Form.Group>
                    {
                        error && <p className='text-danger'>{error.message}</p>
                    }

                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
                <p >New to CarMax? <Link to='/signup' className="btn-link text-decoration-none">Sign Up</Link></p>
                <SocailLogin></SocailLogin>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;