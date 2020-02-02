import React, { Component } from 'react';
import { connect } from 'react-redux';

import uniqid from 'uniqid';

import BtnAdd from '../BtnAdd';

import { fetchCart } from '../../../redux/actions';

import isEmpty from 'lodash.isempty';

class ItemData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: {
                size: null,
                quantity: 1
            },
            noItems: false
        }
    }

    componentDidMount() {
        this.setState({
            productData: { ...this.state.productData, size: this.props.sizes[0] }
        })
    }

    handleSize = (size) => {
        this.setState({
            productData: { ...this.state.productData, size }
        })
    }

    handleQuantity = (e) => {
        const { productData } = this.state;
        const { _id, amount, fetchCart, cartData } = this.props;

        const edit = (val) => {
            this.setState((prevState) => ({
                productData: { 
                    ...prevState.productData, 
                    quantity: val === 'plus' ? prevState.productData.quantity + 1 
                    : prevState.productData.quantity - 1 
                }
            }));

            const found = isEmpty(cartData) ? false :
                cartData.cart.items.find(item => item.id === _id);

            found && fetchCart(`${val+'/'+_id}`, 'POST');
        }
        
        if(e.currentTarget.id === 'plus') {
            if(productData.quantity === amount) {
                return this.setState({ noItems: true });
            }

            edit('plus');
        } else {
            if(productData.quantity === 1) {
                return;
            }

            edit('minus');
        }
    }

    render() { 
        const { productData, noItems } = this.state; 
        const { _id, name, amount, sizes, price } = this.props;
        console.log(this.state.productData);
        
        return (  
            <div className='item-data'>
                <div className='item-data-title'>
                    <h2>{name}</h2>
                    {/* <div className='item-title-line'></div> */}
                </div>

                <div className='item-data-availability'>
                    <h3 
                        className={`${noItems ? 'no-items' : ''}`}
                        onAnimationEnd={() => this.setState({ noItems: false })}
                    >Currently availabile {amount} items</h3>
                </div>

                <div className='item-data-size'>
                    <div className='item-data-size-list'>
                        {sizes && sizes.map(size => {
                            return (
                                <div 
                                    key={uniqid()} 
                                    className={`item-data-size-type ${productData.size === size && 'size-chosen'}`}
                                    onClick={() => this.handleSize(size)}
                                >
                                    <h3>{size}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='item-data-price-quantity'>
                    <div key={productData.quantity} className='item-data-price'>
                        <h3>Price: {price * productData.quantity}$</h3>
                    </div>

                    <div className='item-data-quantity'>
                        <h3>Quantity:</h3>
                        <div className='quantity-reg'>
                            <div id='plus' className='quantity-up-btn' onClick={this.handleQuantity}>
                                <img src={require('../../../images/icons/arrow-up.svg').default} alt='increase' />
                            </div>

                            <div className='quantity-number'><h3>{productData.quantity}</h3></div>

                            <div id='minus' className='quantity-down-btn' onClick={this.handleQuantity}>
                                <img src={require('../../../images/icons/arrow-down.svg').default} alt='decrease' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='item-data-add-to-cart'>
                    <BtnAdd id={_id} details={productData} classes='button' />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartData: state.cartData
    }
}
 
export default connect(
    mapStateToProps,
    { fetchCart }
)(ItemData);