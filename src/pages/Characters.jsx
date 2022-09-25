
import React, { Component } from 'react'
import Banner from '../layouts/Banner/Banner'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'
import ListB from '../layouts/ListB/ListB'

export class Characters extends Component {
    render() {
        return (
            <>
                <Header />
                <Banner/>
                <ListB />
                <Footer />
            </>
        )
    }
}

export default Characters