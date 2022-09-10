import React, { Component } from 'react'

export class Overlay extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='overlay'>
        <img src={`${this.props.img}`} alt="" />
      </div>
    )
  }
}

export default Overlay