const regErr = (state = null, { type, payload }) => {
    switch(type) {
        case 'AUTH_ERROR_REGISTER':
            return payload;
        case 'CLEAR_AUTH_ERROR':
            return null;
        default:
            return state;
    }
};

export default regErr;