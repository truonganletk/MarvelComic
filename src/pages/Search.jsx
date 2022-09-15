import React, { Component } from 'react'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'
import ListA from '../layouts/ListA/ListA'

export class Search extends Component {
  render() {
    return (
      <>
        <Header />
        <ListA />
        <Footer />
      </>
    )
  }
}

export default Search