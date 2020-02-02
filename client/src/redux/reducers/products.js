const initialState = {
    loading: false,
    items: []
}

const products = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'FETCH_START':
            return { ...state, loading: true }
        case 'FETCH_PRODUCTS':
            return { 
                ...state, 
                loading: false, 
                items: payload 
            };
        default:
            return state;
    }
}

export default products;