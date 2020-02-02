const logInErr = (state = null, { type, payload }) => {
    switch(type) {
        case 'AUTH_ERROR_LOGIN':
            return payload;
        case 'CLEAR_AUTH_ERROR':
            return null;
        default:
            return state;
    }
};

export default logInErr;