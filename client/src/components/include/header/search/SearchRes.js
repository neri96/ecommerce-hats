import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

const SearchRes = ({ searchText }) => {
    const [matchRes, setMatchRes] = useState([]);

    const productsAll = useSelector(state => state.productsAll);
    const history = useHistory();

    useEffect(() => {
        const matchSearch = productsAll.items.filter(prod => {
            const prodLowered = prod.name.toLowerCase();
            return searchText.length ? prodLowered.indexOf(searchText.toLowerCase()) > -1 : null;
        });

        setMatchRes(matchSearch);
    }, [searchText]);

    if(matchRes.length) {
        return (
            <div className='search-results'>
                {matchRes.map(product => {
                    const { _id, name, img, price } = product;
                    return (
                        <div key={_id} className='result' onClick={() => history.push('/homburg')}>
                            <div className='prod-img-result'><img src={img} alt='product' /></div>
                            <div className='prod-name-result'><span>{name}</span></div>
                            <div className='prod-price-result'><span>{price}</span></div>
                        </div>
                    )
                })}        
            </div>
        )
    } else {
        return (
            <div className='search-results'>
                <h3>No match found</h3>
            </div>
        )
    }
}

export default SearchRes;