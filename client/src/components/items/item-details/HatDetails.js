import React, { useState, useEffect } from 'react';

import ItemGallery from './ItemGallery';
import ItemData from './ItemData';

import './HatDetails.scss';

const HatDetails = (props) => {
    const [itemDetails, setItemDetails] = useState({});

    useEffect(() => {
        const { data } = props.location;
        const getItemDetails = JSON.parse(sessionStorage.getItem('item-details'));
        
        if(data) {
            setItemDetails(data);

            return sessionStorage.setItem('item-details', JSON.stringify(data)); // the data is put in storage because if a user reloads the page data will return undefined. In order not to lose data, the data is stored in the storage.
        }

        if(getItemDetails) { // in case a user reloads the page (data will be undefined).
            setItemDetails(getItemDetails);
        }

        if(!data && !getItemDetails) { // for a rare situation when a user visits a page from a direct link.
            fetch('/hats/item', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(props.match.params)
            }).then(res => res.json())
            .then(res => setItemDetails(res.hat[0]));
        }
    }, [props.location, props.match.params]);

    return (
        <div className='item-details-wrap'>
                {itemDetails.images ?
                    <div className='item-details'>
                        <ItemGallery images={itemDetails.images} category={itemDetails.category} />
                        <ItemData {...itemDetails} />
                    </div>
                : null}
        </div> 
    )
}

export default HatDetails;