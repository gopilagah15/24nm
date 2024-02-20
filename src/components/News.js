import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles=[{
    "source": {
      "id": null,
      "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Apple Set to Face Near €500 Million EU Fine in Spotify Row - Yahoo Finance",
    "description": null,
    "url": "https://finance.yahoo.com/news/apple-set-face-near-500-163622868.html",
    "urlToImage": null,
    "publishedAt": "2024-02-19T08:22:41Z",
    "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 242 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "CoinDesk"
    },
    "author": "Omkar Godbole",
    "title": "2 Reasons Bitcoin Could Challenge Record High of $69K Before Halving - CoinDesk",
    "description": "Data from past cycles entered around halvings and a key technical analysis tool suggest that the path of least resistance is higher.",
    "url": "https://www.coindesk.com/markets/2024/02/19/2-reasons-bitcoin-could-challenge-record-high-of-69k-before-halving/",
    "urlToImage": "https://www.coindesk.com/resizer/48WvNVrH3h-2L5pSOWDgkB0gqOk=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/UHXRU7KNIVEUDAKFLBTDPCKW7I.jpg",
    "publishedAt": "2024-02-19T07:08:00Z",
    "content": "<ul><li>Bitcoin tends to rally over 30% in eight weeks leading up to the reward halving, according to 10X Research. Bitcoin's fourth halving is due on April 19.\r\n</li><li>Bitcoin's daily RSI has cros… [+3314 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "CNBC"
    },
    "author": "Shreyashi Sanyal",
    "title": "China markets rise as upbeat holiday travel data lifts tourism stocks; Hong Kong shares fall - CNBC",
    "description": "China markets open higher on upbeat travel data, while U.S. markets were shut for a holiday.",
    "url": "https://www.cnbc.com/2024/02/19/asia-markets-china-set-to-return-from-holidays-us-markets-shut-.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/102962543-GettyImages-485324700.jpg?v=1452201755&w=1920&h=1080",
    "publishedAt": "2024-02-19T06:05:00Z",
    "content": "The China travel stocks index jumped 2.1% in early trading Monday, rising to its highest level since Jan. 30.\r\nShanghai-listed Air China rises climbed 1.2%, China Southern Airlines gained 1.7%, while… [+739 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Tipranks.com"
    },
    "author": "Amit Singh",
    "title": "Cathie Wood Is Selling Nvidia (NASDAQ:NVDA) Stock, Ahead of Q4 Print - TipRanks.com - TipRanks",
    "description": "Hedge fund manager Cathie Woodis capitalizing on the Nvidia (NASDAQ:NVDA) stock rally. She continues to sell NVDA shares, ahead of Q4 earnings, theWall ...",
    "url": "https://www.tipranks.com/news/cathie-wood-is-selling-nvidia-nasdaqnvda-stock-ahead-of-q4-print",
    "urlToImage": "https://blog.tipranks.com/wp-content/uploads/2024/02/shutterstock_1606529806-750x406.jpg",
    "publishedAt": "2024-02-19T05:43:03Z",
    "content": "Hedge fund manager Cathie Wood is capitalizing on the Nvidia (NASDAQ:NVDA) stock rally. She continues to sell NVDA shares, ahead of Q4 earnings, the Wall Street Journal reported. Notably, Nvidia stoc… [+1695 chars]"
  }];
    constructor(){
      super();
      this.state={
        articles: this.articles,
        loadings: false
      }
    }    
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
         return <div className="col-md-4">
           <NewsItem title={element.title} description={element.description} src={element.src} image={element.urlToImage}/>
          </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
