import React, { Component } from 'react'
import characterart from '../../assets/images/characters_art_mas_dsk_01.jpeg'

export class Banner extends Component {
    render() {
        return (
            <div className='banner'>
                <figure className='banner-bg'>                    
                    <div className='banner-image' style={{ backgroundImage: `url(${characterart})` }}>
                    </div>
                </figure>
                <div className='banner-text'>
                    <div className="banner-title">Marvel Characters</div>
                    <div className="banner-subtitle">
                        Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner