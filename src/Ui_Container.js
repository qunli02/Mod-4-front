import React from 'react'
import UploadButton from './UploadButton'
import ImgDisplay from './ImgDisplay'
import DetailDisplay from './DetailDisplay'
import Url from "./Url"

export default class Ui_Container extends React.Component {

  state ={
    picURL: "",
    details: "",
    urlLink:null
  }

  handleUrlLink=(data)=>{
    this.setState({
      urlLink:data.target.value
    })
  }

  handleUrlClick=()=>{
    var formData = new FormData();

    formData.append('name', 'sdasda');
    formData.append('user_id', 1)
    formData.append('url', this.state.urlLink);


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
        <Url handleUrlClick={this.handleUrlClick} handleUrlLink={this.handleUrlLink} urlLink={this.state.urlLink} />
        <UploadButton uploadPic={this.uploadPic}/>
        </div>
      )
    }
  }
