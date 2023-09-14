import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const WeatherBlock = styled.div `
    background-color: #ffff88;
    border-radius: 10px;
    margin: 0% auto;
    display: flex;
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
          <h2>✨오늘의 날씨✨</h2>
          <p>지역: {weatherData.name}</p>
          <p>온도: {weatherData.main.temp}°C</p>
          <p>날씨: {weatherData.weather[0].description}</p>
          </div>
      )}
    </div>
    </WeatherBlock>
  );
}

export default Weather;