import React from 'react'
import { Link } from 'react-router-dom'

const CardC = ({ data }) => {
  return (
    <div className='cardC-content'>
      <div className='cardC-image'>
        <Link to={`/detail/characters/${data.id}`}>
          <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="" />
        </Link>
      </div>
      <div className='cardC-text'>
        <Link to={`/detail/characters/${data.id}`}>
          <p>Character</p>
        </Link>
        <Link to={`/detail/characters/${data.id}`}>
          <h3 className='cardC-title'>{data.name}</h3>
        </Link>
        <p>{data.modified}</p>
      </div>
    </div>
  )
}

export default CardC