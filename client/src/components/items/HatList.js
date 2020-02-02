import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchProducts } from '../../redux/actions/index';

import Hat from './Hat';
import Loading from './Loading';

import './Items.scss';

class HatList extends Component {
    componentDidMount() {
        const { category, fetchProducts } = this.props;

        fetchProducts(`/hats/${category}`);
    }

    render() {
        const { loading, items } = this.props.products;

        return (
            <div className='items-wrap'>
                {loading ?
                    <Loading />
                :
                <div className='items'>
                    {!items.length ?
                        <div className='no-items-message'>
                            <h1>{this.props.category} hats are currently out of stock</h1>
                        </div>
                        :
                        items.map(item => {
                            return (
                                <Hat key={item._id} item={item} />
                            )
                        })}
                </div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cartData: state.cartData
    }
}
 
export default connect(
    mapStateToProps,
    { fetchProducts }
)(HatList);