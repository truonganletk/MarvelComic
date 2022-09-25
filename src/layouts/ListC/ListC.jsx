import React from 'react'
import CardC from '../../components/Card/CardC'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader';

function ListC(props) {
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
    const [gotData, setgotData] = useState(false);
    const [listC, setlistC] = useState([]);
    console.log(props);
    useEffect(() => {
        const componentDidMount = () => {
            // titleStartsWith=&
            // console.log(props.nameStartWith);
            axios.get(`http://gateway.marvel.com/v1/public/comics?${props.nameStartWith !== undefined && props.nameStartWith !== "" ? `titleStartsWith=${props.nameStartWith}&` : ""}ts=1&apikey=1a0671e3d28eb43635377754f0572915&hash=a2b08b72060432c20ab8c14a82a2ad72`)
                .then(res => {
                    setlistC([...res.data.data.results]);
                    // this.setState({ listC: [...res.data.data.results], gotData: true })
                    setgotData(true);
                    // console.log(res.data.data.results)
                })
                .catch()
        }
        componentDidMount();
    }, [gotData, props]);
    return (
        <ul className='listC'>
            {
                gotData ?
                    listC.length > 0 ? listC
                        .map((item, index) =>
                            <div key={index} className="cardC">
                                <CardC data={item} />
                            </div>
                        ) : <h2>No results</h2>
                    : <Loader/>
            }
        </ul>
    )
}

export default ListC

// export class ListC extends Component {
//     state = {
//         listC: [
//         ],
//         gotData: false  
//     }
//     componentDidMount = () => {
//         // titleStartsWith=&
//         console.log(this.props.nameStartWith);
//         axios.get(`http://gateway.marvel.com/v1/public/comics?${this.props.nameStartWith!==undefined&&this.props.nameStartWith!==""?`titleStartsWith=${this.props.nameStartWith}&`:""}ts=1&apikey=1a0671e3d28eb43635377754f0572915&hash=a2b08b72060432c20ab8c14a82a2ad72`)
//             .then(res => {
//                 this.setState({ listC: [...res.data.data.results], gotData: true})
//                 // console.log(res.data.data.results)
//             })
//             .catch()
//     }

//     render() {
//         // const getHash = (ts, private_key, public_key) => {
//         //     return md5((ts + private_key + public_key).toString());
//         // }

//         // const public_key = '10360233aad651367dc25e4f9973a1d3';
//         // const private_key = 'cbb6a5a93beb32549d3ff95801bc91904734536c';
//         // let ts = Date.now().toString();

//         // let hash = getHash(ts, private_key, public_key);
//         // let data = [];


//         // axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${public_key}&hash=${hash}`)
//         //     .then(res => {
//         //         const listC = res.data.data.results;
//         //         console.log(listC);
//         //         this.setState({ listC });                
//         //     })



//         return (
//             <ul className='listC'>
//                 {
//                     this.state.gotData?
//                         this.state.listC.length>0?this.state.listC
//                         .map((item,index) =>
//                             <div key={index} className="cardC">
//                                 <CardC data={item} />
//                             </div>
//                         ):<h2>No results</h2>
//                     :<h2>Loading...</h2>
//                 }
//             </ul>

//         )
//     }
// }

// export default ListC