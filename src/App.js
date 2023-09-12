import Categories from './components/NewsPage/Categories';
import MainNews from './components/Main/MainNews';
import MainNewsItem from './components/Main/MainNewsItem';
import NewsList from './components/NewsPage/NewsList';
import usePromise from './components/hook/usePromise';
import { useCallback, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <MainNews />
    </div>
  );
}

export default App;
