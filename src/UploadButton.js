import React from 'react'
// import Card from './Card'

export default class UploadButton extends React.Component {

  componentDidMount(){
    fetch(`http://localhost:4000/api/v1/images`)
    .then(r=>r.json())
    .then(data => {
      console.log(data)
      // this.setState({
      //   pics:data
      // })
    })

  }


uploadPic = () =>{

  var formData = new FormData();
  var fileField = document.querySelector('input[type="file"]');

  formData.append('name', 'sdasda');
  formData.append('user_id', 1)
  formData.append('picture', document.querySelector("#real-file").files[0]);

  console.log(document.querySelector("#real-file").value)

  fetch(`http://localhost:4000/api/v1/images`, {
  method: 'POST',
  body:  formData
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', JSON.stringify(response)));

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
