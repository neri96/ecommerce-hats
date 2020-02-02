import React from 'react';

import { CSSTransition } from 'react-transition-group';

import { useAuth } from '../../hooks/useAuth';
import { useValidation } from './useValidation';

import ErrorMsg from './ErrorMsg';

const LogIn = () => {
    const initialState = {
        email: '',
        password: '',
    };

    const { 
        value, 
        handleInput, 
        handleSubmit, 
        authError,
        handleServerErr, 
        serverErrVis, 
        clearError 
    } = useAuth('login', initialState);

    const { checkEmpty } = useValidation();

    return (
        <form onSubmit={handleSubmit}>
            <CSSTransition
                in={serverErrVis}
                mountOnEnter
                unmountOnExit
                timeout={300}
                classNames='auth-error'
            >
                <ErrorMsg>
                    <div className='error-text-form'>
                        <span>{authError}</span>
                    </div>
                    <div className='close-error-form'>
                        <img 
                            src={require('../../images/icons/close.svg').default}
                            onClick={handleServerErr}
                            alt='icon'
                        />
                    </div>
                </ErrorMsg>
            </CSSTransition>
            
            <div className='auth-fields'>
                <div className='email auth-input-field'>
                    <label htmlFor='email-log-in'>Email</label>
                    <input 
                        type='text' 
                        id='email-log-in'
                        name='email'
                        value={value.email || ''}
                        onChange={handleInput}
                        onBlur={checkEmpty}
                        onFocus={clearError}
                    />
                </div>
                <div className='password auth-input-field'>
                    <label htmlFor='pass-log-in'>Password</label>
                    <input 
                        type='password' 
                        id='pass-log-in'
                        name='password'
                        value={value.password || ''}
                        onChange={handleInput}
                        onBlur={checkEmpty} 
                        onFocus={clearError} 
                    />
                </div>
            </div>
            <div className='auth-footer'>
                <button type='submit'>Log In</button>
            </div>
        </form>
    )
}

export default LogIn;