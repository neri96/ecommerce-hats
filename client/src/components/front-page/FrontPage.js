import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { imgSeasons } from '../../constants/seasonsConst';

import Slider from './Slider';
import Advantages from './Advantages';

import './FrontPage.scss';

const FrontPage = () => {
    const season = useSelector(state => state.season);

    const { imgSummer, imgWinter } = imgSeasons;

    const nextComp = useRef(null);

    const handleScroll = () => {
        nextComp.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div className='front-page'>
            {season === 'summer' ?
                <Slider
                    images={imgSummer}
                    handleScroll={handleScroll} 
                />
                :
                <Slider
                    images={imgWinter}
                    handleScroll={handleScroll} 
                />
            }
            <Advantages ref={nextComp} />
        </div>   
    )
}

export default FrontPage;