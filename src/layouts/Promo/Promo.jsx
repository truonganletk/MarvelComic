import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import PromoImg from '../../assets/images/01-mi-promo-april2020-featured-half-mob-1680x720_0.jpeg'
import PromoImg2 from '../../assets/images/mu-promo_module_standard_dsk.jpeg'


function Promo(props) {
    const [imgMap] = useState({
        'promoimg1': PromoImg,
        'promoimg2': PromoImg2,
    });
    return (
        <div className='promo'>
            <div className='promo_content'>
                <div className='promo_img'>
                    <img src={imgMap[props.promoimg]} alt="" />
                </div>
                <div className='promo_text'>
                    <div className='promo_text_content'>
                        <Link to="/#" >
                            <h3 className='promo_subtitle'>{props.subtitle}</h3>
                            <h1 className='promo_title'>{props.title}</h1>
                            <p className='promo_description'>{props.description}</p>
                            <a href='/#' className='btn btn-red'><span>{props.buttontext}</span></a>
                            <p className="promo_legal">{props.legal}</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Promo