import React from 'react';

import { useDispatch } from 'react-redux';

import isEmpty from 'lodash.isempty';

import CartDetl from './CartDetl';

import { Delete } from '../../../../images/icons';

import './Cart.scss';

const Cart = ({ cartData, fetchCart }) => {
    const dispatch = useDispatch();

    const pickSize = (id, size) => {
        dispatch(fetchCart(`size/${id}`, 'POST', { size }));
    }

    const deleteItem = (id) => {
        dispatch(fetchCart(`delete/${id}`, 'DELETE'));
    }
    
    return (
        <div className='cart-box'>
            {isEmpty(cartData) ? <h3>No items here yet.</h3> :
                <React.Fragment>
                    <div className='cart-body'>
                        {cartData.cart.items.map(item => {
                            const { id, name, category, img, price, quantity, size, sizes, amount } = item;

                            return (
                                <div className='cart-item' key={id}>
                                    <div className='cart-item-name'>
                                        <h4>{name}</h4>
                                        <div className='cart-delete'>
                                            <Delete 
                                                height='40%' 
                                                fill='#cc0000' 
                                                cursor='pointer'
                                                onClick={() => deleteItem(id)} 
                                            />
                                        </div>
                                    </div>
                                    <div className='cart-item-data'>
                                        <div className='pic'>
                                            <img 
                                                src={require(`../../../../images/hats/${category}/${img}`).default} 
                                                alt='item-pic'
                                            />
                                        </div>
                                        <div className='cart-item-det'>
                                            <CartDetl data={{ 
                                                id, 
                                                quantity, 
                                                price, 
                                                amount, 
                                                size, 
                                                sizes,
                                                pickSize,
                                                fetchCart
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='cart-footer'>
                        <div className='cart-total'>Total price: {cartData.cart.price}$</div>
                        <div className='cart-checkout'>
                            <button className='button'>Checkout</button>
                        </div>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default Cart;