const token = (state = null, { type, payload }) => {
    switch(type) {
        case 'AUTH':
            return payload;
        default:
            return state;
    }
};

export default token;