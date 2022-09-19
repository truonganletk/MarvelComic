import React, { Component } from 'react'
import insider from '../../assets/images/marvel_insider-topnav-logo-large2x.png'
import { Link } from 'react-router-dom'

export class PromoThin extends Component {
  render() {
    return (
      <div className='promo thin'>
        <div className='promo_content'>
            <div className="promo_text">
                <div className='promo_title'>REWARD YOUR MARVEL FANDOM WITH</div>
                <div className='promo_description'>JOIN NOW</div>
            </div>
            <div className='promo_img'>
                <Link to="/#"><img src={insider} alt=""/></Link>
            </div>
        </div>
      </div>
    )
  }
}

export default PromoThin