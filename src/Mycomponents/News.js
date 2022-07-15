import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import "./App.css"
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {


  const [art, setArt] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [totalResults, settotalResults] = useState(0)

  useEffect(async () => {
    props.setProgress(10)
    setLoading(true)

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=2f708f6266094c48b83fc0e4ea422d96&page=1&pageSize=${props.pagesize}`;
    props.setProgress(30)
    let data = await fetch(url);
    props.setProgress(100)
    let parsedata = await data.json();
    setLoading(false)

    setArt(parsedata.articles)
    settotalResults(parsedata.totalResults)
     

  }, [])

  const fetchMoreData = async () => {

    
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=2f708f6266094c48b83fc0e4ea422d96&page=${page+1}&pageSize=${props.pagesize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedata = await data.json();

    setArt(art.concat(parsedata.articles))
    setLoading(false)
    settotalResults(parsedata.totalResults)

  };




  return (
    <div >
      <h2 className="top-heading">My News Application</h2>
      <h4>{props.category}</h4>
      {loading ? <Spinner /> : ""}
      <InfiniteScroll
        dataLength={art.length}
        next={fetchMoreData}
        style={{ display: 'flex', flexDirection: 'column' }}
        hasMore={art.length !== totalResults}
        loader={<Spinner />}
      >
        <div className='d-flex my-4 flex-wrap container   align-self-stretch' style={{ flex: 1 }}>
          {art.map((e) => {
            return <Newsitem title={e.title} desc={e.description} url={e.url} urlimg={e.urlToImage} author={e.author} date={e.publishedAt} source={e.source.name} />
          })}
        </div>

      </InfiniteScroll>
    </div>
  )
}

export default News
