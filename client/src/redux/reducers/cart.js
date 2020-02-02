const cart = (state = {}, { type, payload }) => {
    switch(type) {
        case 'ADD_TO_CART':
            return payload;
        default:
            return state;
    }
}

export default cart;