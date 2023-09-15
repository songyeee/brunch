import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

  return (
    <WeatherBlock>
    <div className="Weather">
      {weatherData && (
        <div>
          <h2>🍀오늘의 날씨🍀</h2>
          <p>🚩지역: {weatherData.name}</p>
          <p>🌡️현재 온도: {weatherData.main.temp}°C</p>
          <p>🌞날씨: {weatherData.weather[0].description}</p>
          </div>
      )}
    </div>
    </WeatherBlock>
  );
}

export default Weather;