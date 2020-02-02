import React from 'react';

import HatList from '../HatList';
import '../Items.scss';

const Bowler = () => {
    return (
        <div className='items-body'>
            <HatList category='bowler' />
        </div>
    )
}

export default Bowler;