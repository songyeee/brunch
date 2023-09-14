import Header from './components/Header';
import MainNews from './components/Main/MainNews';
import MainNewsItem from './components/Main/MainNewsItem';
import usePromise from './components/hook/usePromise';
import { useCallback, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div>
      <div style={{width:'50%'}}>abcd</div>
      <MainNews />
      </div>
    </div>
  );
}

export default App;
