import React from 'react';
import uniqid from 'uniqid';

import { NavLink } from 'react-router-dom';

import { mapCategories } from '../../../constants/categoriesConst';

const NavFooter = () => {
    return (
        <div className='footer-nav'>
            <div className='footer-nav-title'>
                <h3>Navigate</h3>
            </div>
            <nav className='footer-nav-summer'>
                <ul>
                    {mapCategories((category) => {
                        return (
                            <li key={uniqid()}>
                                <NavLink to={`/${category}`}>{category}</NavLink>
                            </li>
                        )
                    }, 'summer')}
                </ul>
            </nav>

            <nav className='footer-nav-winter'>
                <ul>
                    {mapCategories((category) => {
                        return (
                            <li key={uniqid()}>
                                <NavLink to={`/${category}`}>{category}</NavLink>
                            </li>
                        )
                    }, 'winter')}
                </ul>
            </nav>
        </div>
    )
}

export default NavFooter;