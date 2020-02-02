import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

const CartDetl = (props) => {
    const { id, quantity, price, amount, size, sizes, pickSize, fetchCart } = props.data;

    const [sizeList, setSizeList] = useState(false);

    const dispatch = useDispatch();

    const cartEdit = async (id, url, quantity, amount) => {
        if(quantity <= 1 && url === 'minus') {
            return;
        } else if(quantity === amount && url === 'plus') {
            return;
        }

        dispatch(fetchCart(`${url+'/'+id}`, 'POST'));
    }

    return (
        <React.Fragment>
            <div className='cart-price'>
                <h4>Price: {price}$</h4>
            </div>
            <div className='cart-item-size'>
                <div className='ci-size-label'>
                    <h4>Size:</h4>
                </div>
                <div 
                    className='ci-size-num'
                    onClick={() => setSizeList(!sizeList)}
                >
                    <div className='ci-chosen'>
                        {size ? 
                            <span>{size}</span> :
                            <img src={require('../../../../images/icons/dd.svg').default} alt='item-pic'/>
                        }    
                    </div> 
                    <div 
                        className='ci-size-list' 
                        style={{ height: sizeList && sizes.length * 30 + sizes.length + 'px' }}
                    >
                        {sizes.map(s => {
                            return (
                                <div 
                                    key={s}
                                    className='cart-item-s-list'
                                    onClick={() => pickSize(id, s)}
                                >
                                    <span>{s}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='cart-qty'>
                <div className='cart-qty-num'>
                    <div className='qty-num'><h4>Quantity:</h4></div>
                    <div className='qty-plmn'>
                        <div className='qty-minus qty' onClick={() => cartEdit(id, 'minus', quantity, amount)}>
                            <span className='horiz'></span>
                        </div>
                        <div className='qty-fg qty'>
                            <h4>{quantity}</h4>
                        </div>
                        <div className='qty-plus qty' onClick={() => cartEdit(id, 'plus', quantity, amount)}>
                            <span></span>
                            <span className='horiz'></span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CartDetl;