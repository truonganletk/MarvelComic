import React, { Component } from 'react'
import Space from '../components/Space/Space'
import Banner from '../layouts/Banner/Banner'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'
import ListC from '../layouts/ListC/ListC'
import Promo from '../layouts/Promo/Promo'


export class home extends Component {
  render() {
    return (
      <>
        <Header/>
        <Banner/>
        <Space/>
        <ListC/>
        <Promo/>
        <Footer/>
      </>
    )
  }
}

export default home