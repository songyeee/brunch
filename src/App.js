import Header from './components/Header';
import MainNews from './components/Main/MainNews';
import MainNewsItem from './components/Main/MainNewsItem';
import usePromise from './components/hook/usePromise';
import { useCallback, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Weatherbox1 from './components/Main/Weatherbox1';
import Clock from './components/Main/Clock';


function App() {
  return (
    <div className="App">
      <Header />
      <Clock />
      <div>
      {/* <Weatherbox1 /> */}
      <MainNews />

   

      </div>
    </div>
  );
}

export default App;
