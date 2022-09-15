import React, { Component } from 'react'
import CardC from '../../components/Card/CardC'
import axios from 'axios';

export class ListC extends Component {
    state = {
        listC: [
        ]
    }

    componentDidMount = () => {
        axios.get(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1a0671e3d28eb43635377754f0572915&hash=a2b08b72060432c20ab8c14a82a2ad72`)
            .then(res => {
                this.setState({ listC: [...res.data.data.results]})
                // console.log(res.data.data.results)
            })
            .catch()
    }

    render() {
        // const getHash = (ts, private_key, public_key) => {
        //     return md5((ts + private_key + public_key).toString());
        // }

        // const public_key = '10360233aad651367dc25e4f9973a1d3';
        // const private_key = 'cbb6a5a93beb32549d3ff95801bc91904734536c';
        // let ts = Date.now().toString();

        // let hash = getHash(ts, private_key, public_key);
        // let data = [];


        // axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${public_key}&hash=${hash}`)
        //     .then(res => {
        //         const listC = res.data.data.results;
        //         console.log(listC);
        //         this.setState({ listC });                
        //     })



        return (
            <ul className='listC'>
                {
                    this.state.listC
                        .map((item,index) =>
                            <div key={index} className="cardC">
                                <CardC data={item} />
                            </div>
                        )
                }
            </ul>

        )
    }
}

export default ListC