import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    
  render() {
    return (
      <div className='container my-3'>
        <NewsItem title="title" description='description'/>
      </div>
    )
  }
}

export default News
