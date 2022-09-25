
import React, { Component } from 'react'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'
import ListB from '../layouts/ListB/ListB'

export class Characters extends Component {
    render() {
        return (
            <>
                <Header />
                <ListB />
                <Footer />
            </>
        )
    }
}

export default Characters