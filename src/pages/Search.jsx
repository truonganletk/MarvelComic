import React, { Component } from 'react'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'
import Promo from '../layouts/Promo/Promo'
import SearchContent from '../layouts/SearchContent/SearchContent'

export class Search extends Component {
  render() {
    return (
      <>
        <Header />
        <SearchContent />
        <Promo promoimg="promoimg2" subtitle="Marvel Unlimited" title="Unlock the Universe" description="Get instant access to 29,000+ digital comics on the web and mobile devices, exclusive deals, and more member-only benefits with Marvel Unlimited!" buttontext="Learn More" legal="Auto-renewal and other terms apply. See marvel.com/unlimited for additional details." />
        <Footer />
      </>
    )
  }
}

export default Search