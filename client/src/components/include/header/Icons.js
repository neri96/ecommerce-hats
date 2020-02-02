import React, { useState } from 'react';

import Search from './search/Search';
import CartIcon from './cart/CartIcon';
import MenuIcon from './menu/MenuIcon';
import AuthIcon from './auth/AuthIcon';

const Icons = ({ season }) => {
    const [searchActive, setSearchActive] = useState(false);

    const searchFieldVis = () => {
        setSearchActive(!searchActive);
    };

    return (
        <div className={`ssca ${searchActive ? 'search-active' : ''}`}>
            <MenuIcon />
            <Search
                season={season} 
                searchFieldVis={searchFieldVis} 
                searchActive={searchActive} 
                setSearchActive={setSearchActive} 
            />
            <CartIcon />
            <AuthIcon />            
        </div>
    )
}

export default Icons;