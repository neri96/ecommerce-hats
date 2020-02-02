import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CSSTransition } from 'react-transition-group';

import SearchRes from './SearchRes';

import Icon from '../../Icon';

import { fetchProductsAll } from '../../../../redux/actions';

const Search = ({ 
    season, 
    searchFieldVis, 
    searchActive, 
    setSearchActive 
}) => {
    const [searchText, setSearchText] = useState('');
    // const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    const outside = useRef(null);

    const closeSearch = useCallback((e) => {
        if(searchActive && outside.current && !outside.current.contains(e.target)) {
            setSearchText('');
            setSearchActive(false);
        }
    }, [searchActive, setSearchActive]);

    useEffect(() => {
        document.addEventListener("click", closeSearch, false);
        return () => {
          document.removeEventListener("click", closeSearch, false);
        };
    }, [closeSearch])

    return (
        <React.Fragment>
            <div className='search-field'>
                <input 
                    type='text' 
                    ref={outside} 
                    onChange={(e) => setSearchText(e.target.value)}
                    onClick={() => dispatch(fetchProductsAll(`/hats/getall`))} 
                    value={searchText} 
                />
            </div>
            <div className='search icon-header'>
                <div className='icon-wrap' onClick={searchFieldVis}>
                    <Icon svgIcon='Search' />
                </div>
            </div>
            {searchActive && <CSSTransition
                in={!!searchText.length}
                mountOnEnter
                unmountOnExit
                timeout={300}
                classNames="results-anim"
            >
                <SearchRes searchText={searchText} />
            </CSSTransition>}
        </React.Fragment>
    )
}

export default Search;