import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CSSTransition } from 'react-transition-group';

import isEmpty from 'lodash.isempty';
import isEqual from 'lodash.isequal';

import Icon from '../../Icon';
import Cart from './Cart';

import { fetchCart } from '../../../../redux/actions';

const CartIcon = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const dispatch = useDispatch();

    const cartData = useSelector(state => state.cartData);

    const ref = useRef(null);
    
    useEffect(() => {
        const getCartItems = async () => {
            dispatch(fetchCart('all'));

            ref.current = cartData;
        };

        if(!isEqual(ref.current, cartData)) {
            getCartItems();
        }

    }, [cartData, dispatch]);

    const cartBoxVis = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className='shopping-cart icon-header'>
                <div className='shopping-cart-icon' onClick={cartBoxVis}>
                    <div className='icon-wrap'>
                        <Icon svgIcon='Cart' />
                    </div>

                    {!isEmpty(cartData) ?
                        <div className='items-total'>
                            <span>{cartData.cart.quantity}</span>
                        </div>
                        : <div></div>
                    }
                </div>

                <CSSTransition
                    in={isCartOpen}
                    mountOnEnter
                    unmountOnExit
                    timeout={300}
                    classNames="cart-items"
                >
                    <Cart
                        cartData={cartData}
                        fetchCart={fetchCart}
                    />
                </CSSTransition>
            </div>
    )
}

export default CartIcon;