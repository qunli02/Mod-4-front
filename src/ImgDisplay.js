import React from 'react'
// import Card from './Card'

export default class ImgDisplay extends React.Component {



    render(){
      return (
        <div >
          <img src={this.props.imgUrl} />
        </div>
      )
    }
  }
