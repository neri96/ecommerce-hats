import React, { useState } from 'react';

import LogIn from './LogIn';
import Register from './Register';

import './Auth.scss';

const Auth = () => {
    const [isReg, setIsReg] = useState(false);

    return (
        <div className={`auth-wrap ${isReg ? 'reg' : ''}`}>
            <div className='auth-block'>
                <div className='auth-header'>
                    <div className='log-in' onClick={() => setIsReg(false)}><span>Log In</span></div>
                    <div className='register' onClick={() => setIsReg(true)}><span>Register</span></div>
                </div>
                <div className='auth'>
                    <LogIn isReg={isReg} />
                    <Register isReg={isReg} />
                </div>
            </div>
        </div>
    )
}

export default Auth;