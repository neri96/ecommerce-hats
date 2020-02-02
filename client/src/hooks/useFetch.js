import { useDispatch } from 'react-redux';

import { fetchCart } from '../redux/actions';

export const useFetch = (url, method, body = null) => {
    const dispatch = useDispatch();

    dispatch(fetchCart(url, method, body));
}
