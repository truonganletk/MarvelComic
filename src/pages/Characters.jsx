import React, { Component } from 'react'
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'
import ListC from '../layouts/ListC/ListC'

export class Characters extends Component {
    render() {
        return (
            <>
                <Header />
                <ListC />
                <Footer />
            </>
        )
    }
}

export default Characters