import Header from './components/Main/Header';
import MainNews from './components/Main/MainNews';
import MainNewsItem from './components/Main/MainNewsItem';
import usePromise from './components/hook/usePromise';
import { useCallback, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Weatherbox1 from './components/Main/Weatherbox1';
import Clock from './components/Main/Clock';
import Weather from './components/Main/Weather';

function App() {
  return (
     <div className="App">
        <Header />
        <div class="line"></div>
       <Clock />
       <div className="mainContainer">
      <div>
      <Weatherbox1 />
      <Weather />
      
      </div>
      <MainNews />
       </div>
     </div>
  );
}
export default App;







