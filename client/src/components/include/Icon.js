import React from 'react';
import { useSelector } from 'react-redux';

import * as Svg from '../../images/icons';

const Icon = ({ svgIcon }) => {
    const season = useSelector(state => state.season);

    const Component = Svg[svgIcon];

    return (
        <Component fill={`${season === 'winter' ? 'white' : 'gray'}`} />
    );
};

export default Icon;