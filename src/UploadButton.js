import React from 'react'
// import Card from './Card'

export default class UploadButton extends React.Component {



    render(){
      return (
        <div >
            <input type="file" id="real-file" />
            <button type="button" id="custom-button" onClick={this.props.uploadPic}> upload the picture</button>
            <span id="custom-text"> no file chosen </span>~

        </div>
      )
    }
  }
