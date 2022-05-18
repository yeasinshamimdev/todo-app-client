import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (loading) return <p>loading...</p>

    if (user) {
        navigate(from, { replace: true });
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Please Login</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                <button
                    onClick={() => signInWithGoogle()}
                    style={{ padding: '10px 30px', backgroundColor: 'tomato', border: 'none', color: 'white', cursor: 'pointer', borderRadius: '5px', }}>Continue with google</button>
            </div>
        </div>
    );
};

export default Login;