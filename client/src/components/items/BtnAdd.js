import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import isEmpty from 'lodash.isempty';

import { fetchCart } from '../../redux/actions';

const BtnAdd = (props) => {
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.cartData);

    const { id, details, classes } = props;

    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        if(!isEmpty(cartData)) {
            cartData.cart.items.forEach(item => {
                if(item.id === id) {
                    setIsAdded(true);
                } else {
                    isAdded && setIsAdded(false);
                }
            });
        } else if(isAdded) setIsAdded(false);
    }, [isAdded, id, cartData]);


    return (
        <React.Fragment>
            {isAdded ? 
                <button
                    className={classes} 
                >
                    In cart
                </button>
                :
                <button
                    className={classes} 
                    onClick={() => dispatch(fetchCart(`add/${id}`, 'POST', details))}
                >
                    Add to card
                </button>
            }
        </React.Fragment>
    )
}

export default BtnAdd;