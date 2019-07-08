import React from 'react'
// import Card from './Card'

export default class UploadButton extends React.Component {



uploadPic = () =>{
  console.log(document.querySelector("#real-file").value)
}

    render(){
      return (
        <div >

            <input type="file" id="real-file" />
            <button type="button" id="custom-button" onClick={this.uploadPic}> upload the picture</button>
            <span id="custom-text"> no file chosen </span>~

        </div>
      )
    }
  }
