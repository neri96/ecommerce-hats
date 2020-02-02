import React, { forwardRef } from 'react';

const Advantages = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='advantages'>
            <div className='advgs-why-us'>
                <h2>Why this store?</h2>
            </div>
            <div className='advgs-wrap'>
                <div className='advg-wrap'>
                    <div className='advg-block'>
                        <div className='advg-icon'>
                            <img 
                                src={require('../../images/icons/service.svg').default} 
                                alt='advg-icon' 
                            />
                        </div>
                        <div className='advg-title'>
                            <h3>Services</h3>
                        </div>
                        <div className='advg-text'>
                            <p>Our standard of customer satisfaction is what sets us apart. Excellent customer service is one of the key areas where we can truly make a difference, which is why we work hard to keep our customers happy and make it easy to do business with us.</p>
                        </div>
                    </div>
                </div>

                <div className='advg-wrap'>
                    <div className='advg-block'>
                        <div className='advg-icon'>
                            <img 
                                src={require('../../images/icons/quality.svg').default} 
                                alt='advg-icon' 
                            />
                        </div>
                        <div className='advg-title'>
                            <h3>Quality</h3>
                        </div>
                        <div className='advg-text'>
                            <p>We guarantee the quality! We use the best materials we can get when we produce our products. Our customer's comfort is our highest priority, so customers may be 100% sure the frustration is the last thing they are going to deal with when they choose us.</p>
                        </div>
                    </div>
                </div>

                <div className='advg-wrap'>
                    <div className='advg-block'>
                        <div className='advg-icon'>
                            <img 
                                src={require('../../images/icons/earth.svg').default} 
                                alt='advg-icon' 
                            />
                        </div>
                        <div className='advg-title'>
                            <h3>Avalaibility</h3>
                        </div>
                        <div className='advg-text'>
                            <p>We can deliver our products to any part of the world with little difference in pinal price</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Advantages;