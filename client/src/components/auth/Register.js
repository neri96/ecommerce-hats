import React from 'react';

import { CSSTransition } from 'react-transition-group';

import { useAuth } from '../../hooks/useAuth';
import { useValidation } from './useValidation';

import ErrorMsg from './ErrorMsg';

const Register = () => {
    // const [errorMsgVis, setErrorMsgVis] = useState(false);

    const initialState = {
        name: '',
        email: '',
        password: '',
        repPassword: ''
    };

    const { 
        value, 
        handleInput, 
        handleSubmit, 
        authError, 
        handleServerErr,
        serverErrVis, 
        clearError 
    } = useAuth('register', initialState);

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
                <div className='name auth-input-field'>
                    <label htmlFor='name-reg'>Name</label>
                    <input 
                        type='text' 
                        id='name-reg'
                        name='name'
                        value={value.name || ''}
                        onChange={handleInput}
                        onBlur={checkEmpty}
                        onFocus={clearError} 
                    />
                </div>
                <div className='email auth-input-field'>
                    <label htmlFor='email-reg'>Email</label>
                    <input 
                        type='text' 
                        id='email-reg'
                        name='email'
                        value={value.email || ''}
                        onChange={handleInput}
                        onBlur={checkEmpty}
                        onFocus={clearError} 
                    />
                </div>
                <div className='password auth-input-field'>
                    <label htmlFor='pass-reg'>Password</label>
                    <input 
                        type='password' 
                        id='pass-reg'
                        name='password'
                        value={value.password || ''}
                        onChange={handleInput}
                        onBlur={checkEmpty}
                        onFocus={clearError} 
                    />
                </div>
                <div className='password auth-input-field'>
                    <label htmlFor='rep-pass-reg'>Confirm Password</label>
                    <input 
                        type='password' 
                        id='rep-pass-reg'
                        name='repPassword'
                        value={value.repPassword || ''}
                        onChange={handleInput}
                        onBlur={checkEmpty}
                        onFocus={clearError} 
                    />
                </div>
            </div>
            <div className='auth-footer'>
                <button type='submit'>Register</button>
            </div>
        </form>
    )
}

export default Register;