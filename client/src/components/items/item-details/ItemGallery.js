import React, { Component, Fragment, createRef } from 'react';
import uniqid from 'uniqid';

import './HatDetails.scss';

class ItemGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderWidth: {
                top: 0,
            },
            lowerImgWidth: 0,
            imgIndex: 0,
            indexDiff: 0
        };

        this.sliderWidth = createRef();
        this.imgWidth = createRef();
    }

    componentDidMount() {
        const topSliderWidth = this.sliderWidth.current.offsetWidth;
        const lowerImgWidth = this.imgWidth.current.offsetWidth;

        this.setState({ 
            sliderWidth: { ...this.state.sliderWidth, top: topSliderWidth }, 
            lowerImgWidth
        })
    }

    handleSlider = (e) => {
        const { images } = this.props;
        const { imgIndex } = this.state;

        if(e.target.id === 'next') {
            if(imgIndex === images.length - 1) {
                return 
            }
            this.setState((prevState) => ({
                imgIndex: prevState.imgIndex + 1
            }), () => {
                this.setState({ indexDiff: this.state.imgIndex - 3 });
            });
        } else {
            if(imgIndex === 0) {
                return 
            }
            this.setState((prevState) => ({
                imgIndex: prevState.imgIndex - 1
            }), () => {
                this.setState({ indexDiff: this.state.imgIndex - 3 });
            });
        }
    }

    handleSliderButtons = () => {
        const { images } = this.props;
        const { imgIndex } = this.state;

        return (
            <Fragment>
                <img 
                    src={require('../../../images/icons/arrow-left.svg').default}
                    id='prev'
                    className={`gallery-btn gallery-prev ${imgIndex === 0 && 'gal-btn-hidden'}`}
                    onClick={this.handleSlider} 
                    alt='previous'
                />
                <img 
                    src={require('../../../images/icons/arrow-right.svg').default}
                    id='next'
                    className={`gallery-btn gallery-next ${imgIndex === images.length - 1 && 'gal-btn-hidden'}`}
                    onClick={this.handleSlider}
                    alt='next'
                />
            </Fragment>
        )
    }

    render() {
        const { images, category } = this.props;
        const { sliderWidth, lowerImgWidth, imgIndex, indexDiff } = this.state;

        return (
            <div className='item-gallery'>
                <div className='top-image'>
                    {this.handleSliderButtons()}
                    <div className='top-image-slider-wrap'>
                        <div
                            ref={this.sliderWidth} 
                            className='top-image-slider' 
                            style={{
                                width: 100 * images.length + '%',
                                transform: `translateX(-${sliderWidth.top / images.length * imgIndex }px)`
                            }}
                        >
                            {images.map(img => {
                                return (
                                    <div key={uniqid()} className='top-image-slide'>
                                        <img 
                                            src={require(`../../../images/hats/${category}/${img}`).default} 
                                            alt={`${category} hat`}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
    
                <div className='lower-images'>
                    {this.handleSliderButtons()}
                    <div className='lower-slider-wrap'>
                        <div 
                            className='lower-slider' 
                            style={{ left: indexDiff > 0 && indexDiff * -lowerImgWidth + 'px'}}
                        >
                            {images.map((img, i) => {
                                return (
                                    <div 
                                        key={uniqid()} 
                                        className={`lower-images-img ${imgIndex === i && 'lower-img-current'}`} 
                                        ref={this.imgWidth}
                                        onClick={() => this.setState({ imgIndex: i })}
                                    >
                                        <img 
                                            src={require(`../../../images/hats/${category}/${img}`).default} 
                                            alt={`${category} hat`}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemGallery;