import React from 'react'
import { useEffect ,useState } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";





const New =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)}-News`


  //  const capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

 
  const  updateNews=async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=927951fbf3024770bb45893ccd9ba76c&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let pasredData = await data.json()
    props.setProgress(50);
    setArticles(pasredData.articles);
    setTotalResults(pasredData.totalResults)
    setLoading(pasredData.loading)
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
  }, [])
  

 
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=927951fbf3024770bb45893ccd9ba76c&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let pasredData = await data.json()
    setArticles(articles.concat(pasredData.articles))
    setTotalResults(pasredData.totalResults)
   
  };

  
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>New Top-Headlines</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </InfiniteScroll>

      </div >
    )
  
}
New.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}
New.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default New
