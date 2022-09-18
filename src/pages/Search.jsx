import React, { Component } from 'react'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'
import SearchContent from '../layouts/SearchContent/SearchContent'

export class Search extends Component {
  render() {
    return (
      <>
        <Header />
        <SearchContent/>
        <Footer />
      </>
    )
  }
}

export default Search