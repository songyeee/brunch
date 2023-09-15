import axios from 'axios';
import React, {useEffect, useState} from 'react'
import MainNewsItem from './MainNewsItem';
import usePromise from '../hook/usePromise';
import styled from 'styled-components';



function MainNews() {
  
  const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=21a35ddfc00a4bef911f88055453a6e3`;

  const [resolve, error, loading] = usePromise(() => axios.get(url), []);


  // 로딩중
  if(loading) {
    return <div>로딩 중 입니다...</div>
  }

  // 에러
  if(error) {
    return <div> 에러가 발생하였습니다. </div>
  }

  // no articles
  if(!resolve) {
    return null;
  }

  const articles = resolve.data.articles;
  
  return (
    <div className='container'>
      {articles.map((article, idx) => <MainNewsItem key={idx} article={article} /> )}
    </div>
  )
}



export default MainNews;
