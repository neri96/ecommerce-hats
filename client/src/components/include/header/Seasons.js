import React from 'react';

import { connect } from 'react-redux';

import { changeSeason } from '../../../redux/actions';

const Seasons = ({ changeSeason, season }) => {
    return (
        <div className={`seasons ${season === 'winter' && 'season-winter'}`}>
            <div className='summer' onClick={() => changeSeason('summer')}>
                <h2>summer</h2>
            </div>
            <div className='winter' onClick={() => changeSeason('winter')}>
                <h2>winter</h2>
            </div>
            <div className='underline'></div>
        </div>
    )
}

export default connect(
    null, 
    { changeSeason }
)(Seasons);