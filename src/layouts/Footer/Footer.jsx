import { faInstagram, faPinterest, faSnapchatGhost, faSquareFacebook, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/footer_logo.svg'
import insider from '../../assets/images/marvel_insider-topnav-logo-large2x.png'
import marvelunlimited from '../../assets/images/mu-logo-w-nav-2x-2021-02.png'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='footer-top'>
          <div className="logo">
            <img src={logo} alt="" width="100" height="50" />
          </div>
          <ul className='footer-boldlist'>
            <li><Link className='footer-list-item' to="/#">About Marvel</Link></li>
            <li><Link className='footer-list-item' to="/#">Help/Faqs</Link> </li>
            <li><Link className='footer-list-item' to="/#">Careers</Link></li>
            <li><Link className='footer-list-item' to="/#">Internships</Link></li>
          </ul>
          <ul className='footer-list'>
            <li><Link className='footer-list-item' to="/#">Advertising</Link></li>
            <li><Link className='footer-list-item' to="/#">Disney+</Link></li>
            <li><Link className='footer-list-item' to="/#">Marvelhq.com</Link></li>
            <li><Link className='footer-list-item' to="/#">Redeem digital comics</Link></li>
          </ul>
          <ul className='footer-brand'>
            <li>
              <div className='brand-card'>
                <img src={insider} alt="" />
                <div className='brand-card-text'>
                  <h3>Marvel Insider</h3>
                  <p>Get Rewarded for Being a Mervel Fan</p>
                </div>
              </div>
              <div className='brand-card'>
                <img src={marvelunlimited} alt="" />
                <div className='brand-card-text'>
                  <h3>Marvel Unlimited</h3>
                  <p>Access Over 30,000+ Digital Comics</p>
                </div>
              </div>
            </li>
          </ul>
          <div className='footer-social'>
            <h3>Follow Marvel</h3>
            <div className='social-icon'>
              <Link className='social-icon-item' to="/"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
              <Link className='social-icon-item' to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
              <Link className='social-icon-item' to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link className='social-icon-item' to="/"><FontAwesomeIcon icon={faTelegram} /></Link>
              <Link className='social-icon-item' to="/"><FontAwesomeIcon icon={faYoutube} /></Link>
              <Link className='social-icon-item' to="/"><FontAwesomeIcon icon={faSnapchatGhost} /></Link>
              <Link className='social-icon-item' to="/"><FontAwesomeIcon icon={faPinterest} /></Link>                          
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <Link className='footer-bottom-item' to="/">Terms of Use</Link>
          <Link className='footer-bottom-item' to="/">Pricacy Policy</Link>
          <Link className='footer-bottom-item' to="/">Your California Privacy Rights</Link>
          <Link className='footer-bottom-item' to="/">Do not Sell My Personal Information</Link>
          <Link className='footer-bottom-item' to="/"> Children's Online Privacy Policy</Link>
          <Link className='footer-bottom-item' to="/">License Agreement</Link>
          <Link className='footer-bottom-item' to="/">Interest-Based Ads</Link>
          <Link className='footer-bottom-item' to="/">Marvel Insider Terms</Link>
          <p className='footer-bottom-item'>©2022 MARVEL</p>
        </div>
      </footer>
    )
  }
}

export default Footer