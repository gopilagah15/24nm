import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "10",
    category: "sports",
};
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};
  articles=[]
    constructor(){
      super();
      this.state={
        articles: this.articles,
        loading: true,
        page:1,
        totalResults:0
      }
    }    
    async componentDidMount(){
      let url=  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0b84fdc73a324b859645e6fcb6ce25f0&page=1&pageSize=${this.props.pageSize}`;
      if((!this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
      let data = await fetch(url);
      this.setState({loading: true});
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page,
        totalResults: parsedData.totalResults,
        loading:false

      })
    }
    }
    handleClick = async() =>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0b84fdc73a324b859645e6fcb6ce25f0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page+1,
        loading: false

      })
    }
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
         return <div className="col-md-4">
           <NewsItem title={element.title} description={element.description} src={element.url} image={element.urlToImage}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-dark">Previous</button>
        <button disabled={(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))} onClick={this.handleClick} type="button" class="btn btn-dark">Next</button>
      </div>
      </div>
    )
  }
}

export default News
