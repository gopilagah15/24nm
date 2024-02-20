import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,image,src} = this.props
    return (
      <div className="container">
         <div className="card" >
        <img src={image} className="card-img-top" alt="..."/>
         <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
    <a href={src} target='_blank' rel="noreferrer" className="btn btn-primary">read more....</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
