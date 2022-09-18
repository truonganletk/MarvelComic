import React, { Component } from 'react'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'
import ListC from '../layouts/ListC/ListC'
import Promo from '../layouts/Promo/Promo'


export class home extends Component {
  render() {
    return (
      <>
        <Header/>
        <ListC/>
        <Promo/>
        <Footer/>
      </>
    )
  }
}

export default home