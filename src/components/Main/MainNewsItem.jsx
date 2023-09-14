import React from 'react'
import styled from 'styled-components';

const MainNewsItemBlock = styled.div`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0px 0px 8px 0px rgba(199, 199, 199, 0.68);
  border-radius: 10px;


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
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
      </a>
    </MainNewsItemBlock>
    )
  };
 
export default MainNewsItem;

