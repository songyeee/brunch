import React from 'react'
import styled from 'styled-components';

const MainNewsItemBlock = styled.div``;

function MainNewsItem({article}) {
  const { title, url, urlToImage, description } = article;
  return (
    <MainNewsItemBlock>
      <a href={url}>
        <img src = {urlToImage ?? 'https://via.placeholder.com/160'} alt='이미지 없음' />
        <h1>{title}</h1>
        <p>{description}</p>
      </a>
    </MainNewsItemBlock>
    )
  };
 
export default MainNewsItem;

