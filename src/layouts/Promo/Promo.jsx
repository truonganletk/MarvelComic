import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PromoImg from '../../assets/images/01-mi-promo-april2020-featured-half-mob-1680x720_0.jpeg'

export class Promo extends Component {
    render() {
        return (
            <div className='promo'>
                <div className='promo_content'>
                    <div className='promo_img'>
                        <img src={PromoImg} alt="" />
                    </div>


                    <div className='promo_text'>
                        <div className='promo_text_content'>
                        <Link to="/#" >
                            <h3 className='promo_subtitle'>Marvel insider</h3>
                            <h1 className='promo_title'>Watch, Earn, Redeem!​</h1>
                            <p className='promo_description'>Get rewarded for doing what you already do as a fan.​</p>
                            <a href='/#' className='promo_btn'><span>Join now</span></a>
                            <p className="promo__legal">Terms and Conditions Apply.</p>
                        </Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Promo