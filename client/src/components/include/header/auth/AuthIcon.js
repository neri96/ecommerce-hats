import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../Icon';

import { Context } from '../../../../context';

const AuthIcon = () => {
    const [isHover, setHover] = useState(false);

    const { isAuth, changeAuth, removeToken } = useContext(Context);

    return (
        <div className='auth-icon icon-header'>
            <div className={`logout-tip ${isHover ? 'hovered' : ''}`}>
                <h4>Log out</h4>
            </div>
            {isAuth ?
                <div 
                    className='icon-wrap' 
                    onClick={() => { changeAuth(); removeToken(); setHover(false); }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <Icon svgIcon='Logout' />
                </div> 
                :
                <Link to='/auth'>
                    <div className='icon-wrap'>
                        <Icon svgIcon='Auth' />
                    </div>
                </Link>
            }
        </div>
    )
}

export default AuthIcon;