import React, { Component } from 'react'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'
import ListA  from '../layouts/ListA/ListA'


export class home extends Component {
  render() {
    return (
      <>
        <Header/>
        home
        <ListA/>
        <Footer/>
      </>
    )
  }
}

export default home