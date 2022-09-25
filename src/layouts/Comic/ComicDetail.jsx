import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Overlay from '../../components/Overlay/Overlay';
import Title1 from '../../components/Title/Title1';

function ComicDetail(props) {
    // console.log(props);
    const [inputText, setinputText] = useState("");
    return (
        <div className='comic'>
            <Overlay img={`${props.data.thumbnail?.path}.${props.data.thumbnail?.extension}`} />
            <div className='Comiccard'>
                <div className='Comiccard-content'>
                    <div className='Comiccard-img'>
                        <img src={`${props.data.thumbnail?.path}.${props.data.thumbnail?.extension}`} alt="" />
                    </div>
                    <div className='Comiccard-text'>
                        <h3 className='Comiccard-text-title Comiccard-text-flex2'>
                            {props.data.title}
                        </h3>
                        <div className='Comiccard-text-flex2'>
                            <Title1 title="Published:" subtitle={props.data.modified} />
                        </div>
                        <div className='Comiccard-text-flex1'>
                            <Title1 title="Writer:" subtitle="Lorem" />
                        </div>
                        <div className='Comiccard-text-flex1'>
                            <Title1 title="Penciler:" subtitle="Lorem" />
                        </div>
                        <div className='Comiccard-text-flex1'>
                            <Title1 title="Cover Artist:" subtitle="Lorem" />
                        </div>
                        <p className='Comiccard-text-description Comiccard-text-flex2'>
                            {(props.data.description !== '' ? props.data.description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")}
                        </p>
                        <Link to="/#"><span className='Comiccard-text-button'>See Variant Covers</span></Link>
                    </div>
                </div>
            </div>
            <div className='purchase'>
                <div className='purchase_container'>
                    <div className='purchase_content'>
                        <div className='purchase_content_left'>
                            <h5>Print Issue<small>In Stores Now</small></h5>
                            <input onChange={(e) => setinputText(e.target.value)} className="purchase_input" type="text" value={inputText} placeholder="Enter Zip Code" name="zipcode" />
                            <a href='/#' className='purchase-btn btn btn-white'><span>Find A Store</span></a>
                        </div>
                        <div className='purchase_content_right'>
                            <div>
                                <h5>Digital Issue <small>Read online or on your iPhone, iPad or Android Device</small></h5>
                                <p>Digital issue is not currently available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='comic-extend'>
                <div className="extend-container">
                    <h5>More Details</h5>
                    <div className="extend-content">
                        <div className="extend-list">
                            <h6>Extended credits and info</h6>
                            <ul>
                                <li>
                                    <strong>Rating:</strong>
                                    Rated T+
                                </li>
                                <li>
                                    <strong>Format:</strong>
                                    Comic
                                </li>
                                <li>
                                    <strong>Price:</strong>
                                    $3.99
                                </li>
                                <li>
                                    <strong>UPC:</strong>
                                    75960620330700411
                                </li>
                                <li>
                                    <strong>FOC Date:</strong>
                                    Aug 22, 2022
                                </li>
                            </ul>
                        </div>

                        <div className="extend-list">
                            <h6>Stories</h6>
                            <ul>
                                <li>
                                    <strong>Writer: </strong>
                                    <a href="/#">Christos Gage</a>
                                </li>
                                <li>
                                    <strong>Inker: </strong>
                                    <a href="/#">Paco Diaz</a>
                                </li>
                                <li>
                                    <strong>Colorist: </strong>
                                    <a href="/#">Dono Sanchez-Almara</a>
                                </li>
                                <li>
                                    <strong>Letterer: </strong>
                                    <a href="/#">Vc Cory Petit</a>
                                </li>
                                <li>
                                    <strong>Penciler: </strong>
                                    <a href="/#">Paco Diaz</a>
                                </li>
                                <li>
                                    <strong>Editor: </strong>
                                    <a href="/#">Martin</a>
                                </li>
                            </ul>
                        </div>
                        <div className="extend-list">
                            <h6>Cover Information</h6>
                            <ul>
                                <li>
                                    <strong>Colorist (cover): </strong>
                                    <a href="/#">EJ Su</a>
                                </li>
                                <li>
                                    <strong>Inker (cover): </strong>
                                    <a href="/#">EJ Su</a>
                                </li>
                                <li>
                                    <strong>Editor: </strong>
                                    <a href="/#">Martin Biro</a>
                                </li>
                                <li>
                                    <strong>Penciler (cover): </strong>
                                    <a href="/#">EJ Su</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComicDetail

// export className ComicDetail extends Component {

//     constructor(props) {
//         super(props);
//         // console.log(props);
//         this.state = {
//             props
//         };
//         console.log(this.state);

//     }

//     componentDidMount() {
//         console.log('componentDidMount() lifecycle')
//       }

//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 {/* <h1>{keyword} {this.props.params.id}</h1> */}
//                 {/* <div className='Comiccard'>
//                     <Overlay img={`${props.data.thumbnail?.path}.${props.data.thumbnail?.extension}`} />
//                     <div className='Comiccard-content'>
//                         <div className='Comiccard-img'>
//                             <img src={`${props.data.thumbnail?.path}.${props.data.thumbnail?.extension}`} alt="" />
//                         </div>
//                         <div className='Comiccard-text'>
//                             <h3 className='Comiccard-text-title Comiccard-text-flex2'>
//                                 {props.data.title}
//                             </h3>
//                             <div className='Comiccard-text-flex2'>
//                                 <Title1 title="Published:" subtitle={props.data.modified} />
//                             </div>
//                             <div className='Comiccard-text-flex1'>
//                                 <Title1 title="Writer:" subtitle="Name 1" />
//                             </div>
//                             <div className='Comiccard-text-flex1'>
//                                 <Title1 title="Penciler:" subtitle="Name 1" />
//                             </div>
//                             <div className='Comiccard-text-flex1'>
//                                 <Title1 title="Cover Artist:" subtitle="Name 1" />
//                             </div>
//                             <p className='Comiccard-text-description Comiccard-text-flex2'>
//                                 {(props.data.description !== '' ? props.data.description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")}
//                             </p>
//                             <Link to="/#"><span className='Comiccard-text-button'>See Variant Covers</span></Link>
//                         </div>
//                     </div>
//                 </div> */}
//             </div>
//         )
//     }
// }


// export default ComicDetail