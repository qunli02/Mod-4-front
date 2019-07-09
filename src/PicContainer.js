import React from 'react'
export default class PicContainer extends React.Component {

  state = {
    pics: []
  }

componentDidMount(){
  fetch(`http://localhost:4000/api/v1/images`)
  .then(r=>r.json())
  .then(data => {
    // console.log(data)
    // this.setState({
    //   pics:data
    // })
  })

}


    render(){
      return (
        <div>
        {this.state.pics}
        </div>
      )
    }
  }
