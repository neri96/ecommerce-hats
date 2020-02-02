export const changeSeason = (season) => {
    return {
        type: 'CHANGE_SEASON',
        payload: season
    }
}

export const auth = (path, value) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`/auth/${path}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            });

            const data = await response.json();

            if(response.ok) {
                localStorage.setItem('token', JSON.stringify(data.token));
                localStorage.setItem('tokenDate', JSON.stringify(new Date()));

                window.dispatchEvent(new Event('storage'));
                
                dispatch({ type: 'AUTH', payload: data.token });
            } else {
                dispatch({ type: `AUTH_ERROR_${path.toUpperCase()}`, payload: data.error });
            }
        } catch (error) {
            dispatch({ type: 'ERROR', payload: error });
        }
    }
}

export const clearAuthError = () => {
    return {
        type: 'CLEAR_AUTH_ERROR'
    }
}

export const fetchProducts = (url) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const response = await fetch(url);
            
            if(response.ok) {
                const data = await response.json();

                dispatch({ type: `FETCH_PRODUCTS`, payload: data.hats });
            }
        } catch (error) {
            dispatch({ type: 'ERROR', payload: error })
        }
    }
}

export const fetchProductsAll = (url) => {
    return async (dispatch) => {
        try {
            const response = await fetch(url);
            
            if(response.ok) {
                const data = await response.json();

                dispatch({ type: `FETCH_PRODUCTS_ALL`, payload: data.hats });
            }
        } catch (error) {
            dispatch({ type: 'ERROR', payload: error })
        }
    }
}

export const getCart = (cart) => {
    return {
        type: 'GET_CART',
        payload: cart
    }
}

export const fetchCart = (url, method = 'GET', body = null) => {
    return async (dispatch) => {
        let options = {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        };

        if(body) {
            options = { ...options, body: JSON.stringify(body) }
        }

        try {
            const response = await fetch(`/cart/${url}`, options);

            if(response.ok) {
                const data = await response.json();

                dispatch({ type: 'GET_CART', payload: data });
            }
        } catch (error) {
            
        }
    }
}