import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Icon from '../../Icon';
import Menu from './Menu';

import './Menu.scss';

const MenuIcon = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='menu-icon icon-header'>
                <div className='icon-wrap' onClick={handleMenu}>
                    <Icon svgIcon={menuOpen ? 'CloseMenu' : 'Menu'} />
                </div>
            </div>
            <CSSTransition
                in={menuOpen}
                mountOnEnter
                unmountOnExit
                timeout={300}
                classNames="menu-anim"
            >
                <Menu handleMenu={handleMenu} />
            </CSSTransition>
        </>
    )
};

export default MenuIcon;