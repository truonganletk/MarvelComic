import React, { Component } from 'react'
import md5 from 'md5';
import axios from 'axios';

export class ListC extends Component {
    // state = {
    //     listC: []
    // }

    render() {
        const getHash = (ts, private_key, public_key) => {
            return md5((ts + private_key + public_key).toString());
        }

        let data = [];
        const public_key = '10360233aad651367dc25e4f9973a1d3';
        const private_key = 'cbb6a5a93beb32549d3ff95801bc91904734536c';
        let ts = Date.now().toString();

        let hash = getHash(ts, private_key, public_key);

        
        function ComponentDidMount() {
            axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${public_key}&hash=${hash}`)
            .then(res => {
                data = res.data.data.results;
                console.log(data);
                // data.map(item =>
                //     <li key={item.id}>{item.id}</li>
                // )
                return data;
            }).then(data => {
                return <div>345</div>
            })
            return <div>123</div>
        }

        return (
            <ul>
                <ComponentDidMount/>
            </ul>

        )
    }
}

export default ListC