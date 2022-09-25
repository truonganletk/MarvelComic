import React, { Component } from 'react'
import Space from '../components/Space/Space'
import Banner from '../layouts/Banner/Banner'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'
import ListC from '../layouts/ListC/ListC'
import ListB from '../layouts/ListB/ListB'
import Promo from '../layouts/Promo/Promo'
import PromoThin from '../layouts/Promo/PromoThin'


export class home extends Component {
  render() {
    return (
      <>
        <Header />
        <PromoThin />
        <Banner />
        <Space />
        <ListC />
        <Promo promoimg="promoimg1" subtitle="Marvel insider" title="Watch, Earn, Redeem!" description="Get rewarded for doing what you already do as a fan." buttontext="Join now" legal="Terms and Conditions Apply." />
        <Footer />
      </>
    )
  }
}

export default home