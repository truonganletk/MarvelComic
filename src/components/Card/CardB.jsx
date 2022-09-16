import React from 'react'

const CardB = ({data}) => {
    return (
        <div className="cardB-content">
            <div className="cardB-image">                
                <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="" />
                
            </div>
            <div className="cardB-text">
                <h4 className="headline">{data.name}</h4>
                <div className="cardB-footer">
                    <p className="secondary-text">Secondary text</p>
                </div>
            </div>
        </div>
    ) 

    

}


export default CardB