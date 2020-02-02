import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import Seasons from './Seasons';
import NavHeader from './NavHeader';
import Icons from './Icons';
import Icon from '../Icon';

import './Header.scss';

const Header = ({ season }) => {
    return (
        <header>
            <div className='main-icon'>
                <Link to='/'>
                    <div className='main-icon-wrap'>
                        <Icon svgIcon='MainIcon' />
                    </div>
                </Link>
            </div>
            <div className='seasons-nav'>
                <Seasons season={season} />
                <NavHeader season={season} />
            </div>
            <Icons season={season} />
        </header>
    )
}

const mapStateToPros = (state) => {
    return {
        season: state.season
    }
}

export default connect(mapStateToPros)(Header);