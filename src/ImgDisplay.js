import React from 'react'

export default class ImgDisplay extends React.Component {



    render(){
      return (
        <div >

          <img className="pic" src={this.props.imgUrl} />
          <br/>
          <br/>
          <br/>
          <br/>
          {this.props.details}
        </div>
      )
    }
  }
