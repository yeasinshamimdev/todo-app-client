import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    return (
        <div style={{ backgroundColor: 'black', padding: '2px' }}>
            <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}>
                <Link to='/todo' style={{ color: 'white', marginRight: '30px', textDecoration: 'none', backgroundColor: 'blue', padding: '5px 10px', borderRadius: '5px' }}>Todo List</Link>
                {
                    user ? <button
                        onClick={() => signOut(auth)}
                        style={{ color: 'white', textDecoration: 'none', backgroundColor: 'blue', padding: '10px 10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Sign out</button>
                        :
                        <Link to='/login' style={{ color: 'white', textDecoration: 'none', backgroundColor: 'blue', padding: '5px 10px', borderRadius: '5px' }}>Login</Link>
                }
            </ul>
        </div>
    );
};

export default Header;