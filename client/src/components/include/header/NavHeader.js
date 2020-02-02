import React from 'react';
import uniqid from 'uniqid';

import { NavLink } from 'react-router-dom';

import { mapCategories } from '../../../constants/categoriesConst';

const NavHeader = ({ season }) => {
    return (
        <nav
            key={uniqid()} 
            className={`header-nav ${season === 'winter' && 'nav-winter'}`} 
        >
            <ul>
                {mapCategories((category) => {
                    return (
                        <li key={uniqid()}>
                            <NavLink to={`/${category}`}>{category}</NavLink>
                        </li> 
                    )   
                }, season)}
            </ul>
        </nav>
    )
}

export default NavHeader;