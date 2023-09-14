import Header from './components/Header';
import MainNews from './components/Main/MainNews';
import MainNewsItem from './components/Main/MainNewsItem';
import usePromise from './components/hook/usePromise';
import { useCallback, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <MainNews />
    </div>
  );
}

export default App;
