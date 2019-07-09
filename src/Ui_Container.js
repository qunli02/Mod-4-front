import React from 'react'
import UploadButton from './UploadButton'
import ImgDisplay from './ImgDisplay'
import DetailDisplay from './DetailDisplay'

export default class Ui_Container extends React.Component {

  state ={
    picURL: "",
    details: ""
  }

setDisplay = (res) => {
  this.setState({
    picURL: res.url,
    details: res.details
  })
}



  uploadPic = () =>{

  var formData = new FormData();
  var fileField = document.querySelector('input[type="file"]');

  formData.append('name', 'sdasda');
  formData.append('user_id', 1)
  formData.append('picture', document.querySelector("#real-file").files[0]);


  fetch(`http://localhost:4000/api/v1/images`, {
  method: 'POST',
  body:  formData
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(res => {
      this.setDisplay(res)
  });

  }



    render(){
      return (
        <div>
        <ImgDisplay imgUrl={this.state.picURL}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <DetailDisplay details={this.state.details} />
        <br/>
        <br/>
        <br/>
        <br/>
        <UploadButton uploadPic={this.uploadPic}/>
        </div>
      )
    }
  }
