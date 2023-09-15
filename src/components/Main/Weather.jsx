import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import boots from './img/boots.png';
import cardigan from './img/cardigan.png';
import coat from './img/coat.png';
import hoodie from './img/hoodie.png';
import jacket from './img/jacket.png';
import jeans from './img/jeans.png';
import lstshirts from './img/lstshirts.png';
import puffer from './img/puffer.png';
import rainboots from './img/rainboots.png';
import sandals from './img/sandals.png';
import scarf from './img/scarf.png';
import shoes from './img/shoes.png';
import shorts from './img/shorts.png';
import sleeveless from './img/sleeveless.png';
import sstshirts from './img/sstshirts.png';
import sweater from './img/sweater.png';
import sweater2 from './img/sweater2.png';
import umbrella from './img/umbrella.png';
import winterhat from './img/winterhat.png';




const WeatherBlock = styled.div `
    border-radius: 10px;
    margin: 0% auto;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 0px 8px 0px rgba(199, 199, 199, 0.68);

    h2 {
      display: flex;
      justify-content: space-around;
    }
    p {
      display: flex;
      justify-content: space-around;
      line-height: 0.5em;
      letter-spacing: 0.2rem;
      font-size : 20px;
      font-style: border;
    }
    
`


const API_KEY = '13370407832c91a4e9588f1ce73f6611'; 

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherImage, setWeatherImage] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
            .then((response) => {
              setWeatherData(response.data);
              ootd(response.data.main.temp);
            })
            .catch((error) => {
              console.error('에러가 발생하였습니다:', error);
            });
        },
        (error) => {
          console.error('위치 정보를 가져오는 중 에러 발생:', error);
        }
      );
    } else {
      console.error('Geolocation이 지원되지 않습니다.');
    }
  }, []);

  const ootd = (temp) => {
    if (temp < 10) {
      setWeatherImage(boots);
    } else if (temp < 20) {
      setWeatherImage(cardigan);
    } else {
      setWeatherImage(sleeveless);
    }
  };

  return (
    <WeatherBlock>
    <div className="Weather">
      {weatherData && (
        <div>
          <h2>🍀오늘의 날씨🍀</h2>
          <p>🚩지역: {weatherData.name}</p>
          <p>🌡️현재 온도: {weatherData.main.temp}°C</p>
          <p>🌞날씨: {weatherData.weather[0].description}</p>
          <p>🌡️현재 온도: {weatherData.main.temp}°C</p>
          <p>오늘의 ootd 추천: </p>
           <img src={weatherImage} />


          </div>
      )}
  
    </div>
    </WeatherBlock>
  );
}

export default Weather;