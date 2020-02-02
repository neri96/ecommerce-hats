import isEmpty from 'lodash.isempty';

const cartData = (state = {}, { type, payload }) => {
    switch(type) {
        case 'GET_CART':
            const { cart } = payload
            return isEmpty(cart) ? {} : payload;
        default:
            return state;
    }
}

export default cartData;