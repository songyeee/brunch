import Header from './components/Header';
import MainNews from './components/Main/MainNews';
import MainNewsItem from './components/Main/MainNewsItem';
import usePromise from './components/hook/usePromise';
import { useCallback, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Weatherbox1 from './components/Main/Weatherbox1';
function App() {
  return (
    <div className="App">
      <Header />
      <div>
      <Weatherbox1 />
      <MainNews />
      </div>
    </div>
  );
}
export default App;