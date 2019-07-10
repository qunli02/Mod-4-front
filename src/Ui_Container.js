import React from 'react'
import UploadButton from './UploadButton'
import ImgDisplay from './ImgDisplay'
import Url from "./Url"
import { Route, Switch, Redirect, Link } from "react-router-dom"

export default class Ui_Container extends React.Component {

  state ={
    allPics:[],
    picURL: "",
    details: "",
    urlLink:null
  }

  componentDidMount(){
    fetch(`http://localhost:4000/api/v1/images`)
    .then(r=>r.json())
    .then(data => {
      this.setState({
        allPics:data
      })
    })
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
      console.log(this.state.allPics)
      return (
        <Switch>
          <Route exact path="/" render={()=>{
              return(<div>
              <h1 className="asdf">SEARCH A PICTURE aka route 1</h1>
              <ImgDisplay imgUrl={this.state.picURL} details={this.state.details}/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <Url handleUrlClick={this.handleUrlClick} handleUrlLink={this.handleUrlLink} urlLink={this.state.urlLink} />
              <UploadButton uploadPic={this.uploadPic}/>
              <Link to="/image">
                <button>All images</button>
              </Link>
              </div>)
          }}/>
              return(
                <div className="asdf">
                  <h1>THIS  IS ALL THE PICTURES aka route 2</h1>
                  {
                  this.state.allPics.map(pic=> <ImgDisplay key={pic.id} imgUrl={pic.url} details={pic.details}/>)
                  }
                </div>
              )
        }}/>
      <Redirect to="/" />
      </Switch>
      )
    }
  }
