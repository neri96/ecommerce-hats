import React, { useState, useEffect } from 'react';

const Slider = ({ images, handleScroll }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {        
        const nextImg = setInterval(() => {
            const countUpd = count + 1;

            if(countUpd > images.length - 1) {
                setCount(0)
            } else {
                setCount(countUpd);
            }
        }, 4000);
        
        return () => {
            clearInterval(nextImg);
        }
    }, [count, images.length]);

        return (
            <div className='front-slider'>
                {images.map((img, i) => {
                    return (
                        <img
                            key={i} 
                            src={require(`../../images/${img}.jpg`).default}
                            style={{ opacity: count === i ? '1' : 0 }}  
                            alt='bg-img' 
                        />
                    )
                })}
                <div 
                    className='arrow-down'
                    onClick={handleScroll}
                ></div>
            </div>
        )
}

export default Slider;