import React from 'react';

const ErrorMsg = ({ children }) => {
    return (
        <div className='error-msg'>
            <div className='warning-form'>
                <img src={require('../../images/icons/attention.svg').default} alt='error-icon' />
            </div>
            {children}
        </div>
    )
}

export default ErrorMsg;