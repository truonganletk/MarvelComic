import axios from 'axios'
import React, { Component } from 'react'
import CardB from '../../components/Card/CardB'

export class ListB extends Component {
    state = {
        listB: []
    }
    
    componentDidMount = () => {
        axios.get(``)
    }
    render () {
        return (
            <>
                <ul className='listB'>
                {
                    this.state.listB
                        .map(item =>
                            <div key={item.key} className="cardB">
                                <CardB data={item} />
                            </div>
                        )
                }
                </ul>
            </>
        )
    }

    
}

export default ListB