import React, { Component } from 'react'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'
import ListC from '../layouts/ListC/ListC'
import ListB from '../layouts/ListB/ListB'
import Promo from '../layouts/Promo/Promo'


export class home extends Component {
  render() {
    return (
      <>
        <Header />
        <ListB />
        <ListC />
        <Promo />
        <Footer />
      </>
    )
  }
}

export default home