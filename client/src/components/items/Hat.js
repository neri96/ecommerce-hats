import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BtnAdd from './BtnAdd';

const Hat = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const { _id, name, category, price, images } = item;

    return (
        <div className='item-inner'>
            <div 
                className='item-body'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className='item-body-picture'>
                    <img 
                        src={require(`../../images/hats/${category}/${images[0]}`).default} 
                        alt='item-pic'
                    />
                </div>
                <div className={`item-details-btn ${isHovered ? 'hovered' : ''}`}>
                    <Link to={{
                        pathname: `/hats/details/${_id}`,
                        data: item
                    }}>details</Link>
                </div>
            </div>
            <div className='item-footer'>
                <div className='item-name'>
                    <span>{name}</span>
                </div>
                <div className='item-price'>
                    <span>{price}$</span>
                    <BtnAdd id={_id} details={{ size: null, quantity: 1 }} classes='button' />
                </div>
            </div>
        </div>
    )
}

export default Hat;