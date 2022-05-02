import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocailLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const hanldeGoogleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={hanldeGoogleSignIn}>Sign In with Google</button>
        </div>
    );
};

export default SocailLogin;