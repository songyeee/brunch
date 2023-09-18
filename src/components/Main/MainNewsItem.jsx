import React from 'react'
import styled from 'styled-components';

const MainNewsItemBlock = styled.div`
  display: flex;
  padding: 1rem;
  margin: 0.8rem;
  margin-top: 0px;
  border-bottom: 1px solid rgba(199, 199, 199, 0.68);


  a{
    display: flex;
    color: black;
    text-decoration: none;
    font-size: 10pt;
  }

  img{
    display: block;
    width: 160px;
    height: 100px;
    object-fit: cover;
    margin-right: 2rem;
    border-radius: 10px;
  }

  h1 {
    font-size: 12pt;
    }

  article {
    align-content:center;
  }

  `
 

function MainNewsItem({article}) {
  const { title, url, urlToImage, description } = article;
  return (
  
    <MainNewsItemBlock>
      <a href={url}>
        <img src = {urlToImage ?? 'https://via.placeholder.com/160'} alt='이미지 없음' />
        <div className='article'>
        <h1>{title.slice(0,40)+'...'}</h1>
        <p>{description.slice(0,50)+'...'}</p>
        </div>
      </a>
    </MainNewsItemBlock>
    
    )
  };
 
export default MainNewsItem;

