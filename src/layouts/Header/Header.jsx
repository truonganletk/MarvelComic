import React, { Component } from 'react'
import { ReactComponent as MarvelLogo} from '../../assets/images/header_logo.svg'
import iconMUshield from '../../assets/images/icon-mu-shield.png'
import { ReactComponent as SearchIcon } from '../../assets/images/search-svgrepo-com.svg'
import { ReactComponent as MenuIcon } from '../../assets/images/menu-icon.svg'
import { ReactComponent as CloseIcon } from '../../assets/images/icons8-close.svg'

export class Header extends Component {
  ClickMenu = () => {
    const headerLower = document.getElementsByClassName('header__lower');
    //console.log(headerLower)
    headerLower[0].classList.add('active')
  }
  CloseMenu = () => {
    //alert("clicked")
    const headerLower = document.getElementsByClassName('header__lower');
    //console.log(headerLower)
    headerLower[0].classList.remove('active')
  }
  render() {
    return (
      <>
        <header className='header'>
          <div className="header__upper">
            <div className="upperContainer">
              <div className="user-menu-tab">
                <div className="user-menu__avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.6 66.7">
                    <path fill-rule="evenodd" d="M59.5 15.1L53 51.4c0 .4-.3.6-.6.6h-6.5c-.3 0-.6-.2-.8-.6l-8.8-24.7H36l-4.3 24.7c-.1.3-.3.6-.6.6H25c-.3 0-.6-.2-.5-.6l6.6-37.3c.1-.3.3-.6.6-.6h6.4c.5 0 .7.2.8.6l8.8 24.7h.3l5.5-30.4C47.9 3.7 40.6.9 32.7.9 14.7.9.2 15.5.2 33.4c0 8.8 3.5 16.7 9.1 22.5l7.3-41.7c.1-.3.3-.6.6-.6H24c.3 0 .5.2.5.6l-8.3 47.2c4.8 2.8 10.4 4.5 16.4 4.5 17.9 0 32.5-14.5 32.5-32.5 0-6.8-2.1-13.1-5.6-18.3z">
                    </path>
                  </svg>
                </div>
                <div className="user-menu-links">
                  <a href="/#" className="user-menu__sign-in">Sign in</a>
                  <span>|</span>
                  <a href="/#" className="user-menu__join">Join</a>
                </div>
              </div>
              <div 
                className="menu-icon"
                onClick={ () => this.ClickMenu() }
              >
                <MenuIcon className='menu-icon-svg'/>
              </div>
              <a href="/" className="logo">
                <MarvelLogo/>
              </a>
              <div className="right-links">
                <div className="searchPromo-Container">
                  <div className="searchPromo__img">
                    <img src={ iconMUshield } alt="icon-mu-shield"/>
                  </div>
                  
                  <div className="searchPromo__wrap">
                    <p>Marvel Unlimited</p>
                    <span>Subscribe</span>
                  </div>
                </div>
                <div className="search">
                  <a href="/search" className="search-link">
                    <SearchIcon className='search_icon'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="header__lower">
            
            <ul>
              <li 
                className="close-icon" 
                onClick={ () => this.CloseMenu() }
              >
                <CloseIcon className='close-icon-svg'/>
              </li>
              <li><a href="/">HOME</a></li>
              <li><a href="/category">CATEGORIES</a></li>
              <li><a href="/detail">DETAILS</a></li>
              <li><a href="/search">SEARCH</a></li>
            </ul>
          </div>
        </header>
      </>
    )
  }
}

export default Header