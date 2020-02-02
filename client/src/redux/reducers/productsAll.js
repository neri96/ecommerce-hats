const initialState = {
    items: []
}

const productsAll = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'FETCH_PRODUCTS_ALL':
            return { 
                ...state, 
                items: payload 
            };
        default:
            return state;
    }
}

export default productsAll;