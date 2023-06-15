import React, { Component } from "react";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import ListD from "../layouts/ListD/ListD";
import Promo from "../layouts/Promo/Promo";

export class Comics extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>COMICS PAGE</h1>

        <ListD data="1012717" />
        <Promo
          promoimg="promoimg2"
          subtitle="Marvel Unlimited"
          title="Unlock the Universe"
          description="Get instant access to 29,000+ digital comics on the web and mobile devices, exclusive deals, and more member-only benefits with Marvel Unlimited!"
          buttontext="Learn More"
          legal="Auto-renewal and other terms apply. See marvel.com/unlimited for additional details."
        />
        <Footer />
      </>
    );
  }
}

export default Comics;
