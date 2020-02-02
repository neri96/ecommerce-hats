import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { auth, clearAuthError } from '../redux/actions';

export const useAuth = (path, initialState) => {
    const [value, setValue] = useState(initialState);
    const [errors, setErrors] = useState([]);
    const [serverErrVis, setServerErrVis] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const authError = useSelector(state => {
        const { logInErr, regErr } = state;

        return path === 'login' ? logInErr : regErr;
    });

    useEffect(() => {
        if(authError && !serverErrVis) {
            setServerErrVis(true);
        }
    }, [authError,serverErrVis, setServerErrVis]);

    const handleInput = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };
    
    const handleServerErr = () => {
        setServerErrVis(false);

        setTimeout(() => {
            dispatch(clearAuthError());
        }, 300);
    }

    const clearError = (e) => {
        const t = e.target;

        errors.forEach(err => {
            if(err === t.name) {
                t.style.border = '1px solid #4d4d4d';
                t.placeholder = '';
                const errorsUpd = errors.filter(errFtr => errFtr !== t.name);
    
                setErrors([...errorsUpd]);
            }
        });
    };

    const validate = (elems) => {
        let errorsArr = [];

        const createError = (elem, error) => {
            setValue({ ...value, [elem.name]: '' });
            elem.style.border = '1px solid #ff4d4d';
            elem.placeholder = error;

            if(!errors.includes(elem.name)) {
                errorsArr.push(elem.name);
            }

            return false;
        };

        const valsArr = Object.keys(value);
        console.log(valsArr);

        valsArr.forEach(val => {
            if(elems[val].value.length < 5) {
                if(elems[val].name === 'name') {
                    console.log(elems[val]);
                    createError(elems[val], 'Name must at least contain 5 characters');
                }
                if(elems[val].name === 'password') {
                    createError(elems[val], 'Password must at least contain 8 characters');
                }
            };

            !elems[val].value &&
                createError(elems[val], 'This field can not be empty!');
        });

        if(path === 'register') {
            value.password !== value.repPassword &&
                createError(elems.repPassword, 'Passwords do not match');
        };

        setErrors([...errorsArr]);

        return errorsArr.length;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const elems = e.target.elements;

        const errorsArr = validate(elems);
        if(errorsArr) return;

        dispatch(auth(path, value));

        history.push('/');
    };

    return { 
        value, 
        handleInput, 
        handleSubmit, 
        authError,
        serverErrVis,
        handleServerErr, 
        clearError 
    };
};