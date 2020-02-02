import { useState } from 'react';

export const useValidation = () => {
    const [error, setError] = useState(null);

    const checkEmpty = () => {
        // const t = e.target;

        // const createError = (error) => {
        //     t.style.border = '1px solid #ff4d4d';
        //     t.placeholder = error;
        //     setError(true);
        // };

        // if(!t.value) {
        //     createError('This field can not be empty!');
        // } else if(value.name < 5) {
        //     createError('Name must have at least 5 characters');
        // } else if(value.password < 8) {
        //     createError('Password must have at least 8 characters');
        // };
        
        // if(type === 'register') {

        // };
    }

    const clearError = (e) => {
        if(error) {
            e.target.style.border = '1px solid #4d4d4d';
            // setValue({ ...value, [e.target.name]: '' });
            e.target.placeholder = '';
            setError(false); 
        }
    }

    return { error, checkEmpty, clearError };
}