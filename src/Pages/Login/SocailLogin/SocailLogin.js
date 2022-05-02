import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

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
    return (
        <div>
            <button className="btn btn-primary" onClick={hanldeGoogleSignIn}>Sign In with Google</button>
        </div>
    );
};

export default SocailLogin;