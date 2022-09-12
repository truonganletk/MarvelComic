import React, { Component } from 'react'

export class Title1 extends Component {
  render() {
    return (
      <div className='title1'>
        <h3 className='title1-title'>
            {this.props.title}
        </h3>
        <p className='title1-subtitle'>
            {this.props.subtitle}
        </p>
      </div>
    )
  }
}

export default Title1