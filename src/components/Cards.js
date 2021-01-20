import React from 'react'
import './Cards.css';

function Cards() {
    return (
        <>
        <div className='responsive' id='services'>
            <h1>Check out this Epic Waterfalls <i className="fa fa-tint" aria-hidden="true"></i></h1>
           
            <div className='gallery-wrapper'>
            <div className='gallery'>
                <a target='_blank'>
                    <img src='images/waterfall-1.jpg' alt='Yosemite waterfalls' />
                </a>
                <h5 className='desc'>Top 10 Yosemite Waterfalls</h5>
            </div>

            <div className='gallery'>
                <a target='_blank'>
                    <img src='images/waterfall-2.jpg' alt='Washington waterfalls' />
                </a>
                <h5 className='desc'>Top 10  Washington Waterfalls</h5>
            </div>
            </div>
            <div className='gallery-wrap'>
                <div className='small-gallery'>
                     <a target='_blank'>
                        <img src='images/waterfall-3.jpg' alt='Montana waterfall guide' />
                        </a>
                            <h5 className='desc'>Top 10  Montana Waterfalls</h5>
                </div>
                <div className='small-gallery'>
                     <a target='_blank'>
                        <img src='images/waterfall-4.jpg' alt='Hawai waterfalls detalis' />
                        </a>
                            <h5 className='desc'>Top 10 Hawai Waterfalls</h5>
                </div>
                <div className='small-gallery'>
                     <a target='_blank'>
                        <img src='images/waterfall-5.jpg' alt='Waterfall worth to see in Autumn' />
                        </a>
                            <h5 className='desc'>Top 10 Autumn Waterfalls</h5>
                </div>

            </div>
           
           
        </div>
        </>
    )
}

export default Cards;
