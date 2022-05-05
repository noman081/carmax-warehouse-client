import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocailLogin.css';
import google from '../../../images/icon-google.png';
import github from '../../../images/github.png';
import { toast, ToastContainer } from 'react-toastify';
const SocailLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const hanldeGoogleSignIn = () => {
        signInWithGoogle();

    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        toast.error(error.message);
    }
    return (
        <div className='mt-3'>

            <div>
                <p className='text-center'>or</p>
                <hr />
            </div>
            <div className='d-lg-flex justify-content-evenly align-items-center text-center'>
                <button className="btn btn-light shadow-lg socail-signin d-lg-flex justify-content-between" onClick={hanldeGoogleSignIn}><img src={google} alt="" /><span className='ms-3'>Google Sign In</span></button>
                <button className="btn btn-light shadow-lg socail-signin"><img src={github} alt="" /><span className='ms-3'>Github Sign In</span></button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocailLogin;