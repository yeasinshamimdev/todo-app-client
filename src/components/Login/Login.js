import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div>
            <button style={{ padding: '5px 10px', backgroundColor: 'tomato', }}>Continue with google</button>
        </div>
    );
};

export default Login;