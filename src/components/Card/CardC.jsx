import React from 'react'

const CardC = ({data}) => {
    return (
      <div className='cardC-content'>
        <div className='cardC-image'>
            <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt=""/>
        </div>
        <div className='cardC-text'>
            <p>Character</p>
            <h3>{data.name}</h3>
            <p>{data.modified}</p>
        </div>
      </div>
    )
}

export default CardC