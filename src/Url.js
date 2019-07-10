import React from 'react'

export default class Url extends React.Component {

    render(){
      return (
        <div className="input">URL:
          <input onChange={this.props.handleUrlLink} name="url" type="text" placeholder="URL" value={this.props.urlLink}/>
          <button type="submit" onClick={this.props.handleUrlClick}>Submit</button>
        </div>
      )
    }
  }
