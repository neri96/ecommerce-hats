import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import uniqid from 'uniqid';

import { changeSeason } from '../../../../redux/actions';
import { mapCategories } from '../../../../constants/categoriesConst';

const Menu = ({ handleMenu }) => {
    const season = useSelector(state => state.season);
    const dispatch = useDispatch();

    return (
        <div className={`menu-small ${season === 'winter' && 'nav-winter-smaill'}`}>
            <div className='left-panel'>
                <div 
                    className='season-mini summer-mini' 
                    onClick={() => dispatch(changeSeason('summer'))}
                >
                    <h2>summer</h2>
                </div>
                <div 
                    className='season-mini winter-mini' 
                    onClick={() => dispatch(changeSeason('winter'))}
                >
                    <h2>winter</h2>
                </div>
            </div>

            <div className='right-panel'>
                <nav key={uniqid()}>
                    <ul>
                        {mapCategories((category) => {
                            return (
                                <li key={uniqid()} onClick={handleMenu}>
                                    <NavLink to={`/${category}`}>{category}</NavLink>
                                </li> 
                            )   
                        }, season)}
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Menu;