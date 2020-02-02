import React from 'react';

import HatList from '../HatList';
import '../Items.scss';

const Homburg = () => {
    return (
        <div className='items-wrap'>
            <HatList category='homburg' />
        </div>
    )
}

export default Homburg;