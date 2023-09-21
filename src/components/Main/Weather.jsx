import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import summer from './img/summer.png'
import sf from './img/sf.png'
import winter from './img/winter.png'


const WeatherBlock = styled.div `
    border-radius: 10px;
    margin: 0% auto;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 0px 10px 0px rgba(199, 199, 199, 0.68);
    margin: 30px;

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
      margin-bottom: 30px;
    }
    img {
      height: 200px;
      width: 600px;
    }
    line {
      border: 1px solid black;
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
      setWeatherImage(winter);
    } else if (temp < 20) {
      setWeatherImage(sf);
    } else {
      setWeatherImage(summer);
    }
  };
  return (
    <WeatherBlock>
    <div className="Weather">
      {weatherData && (
        <div>
          <h2>🍀오늘의 날씨🍀</h2>
          <p>🚩지역: {weatherData.name}</p>
          <p>🌞날씨: {weatherData.weather[0].description}</p>
          <p>🌡️현재 기온: {weatherData.main.temp}°C</p>
          <p>🌡️오늘의 최저기온:{weatherData.main.temp_min}°C</p>
          <p>🌡️오늘의 최고기온:{weatherData.main.temp_max}°C</p>
          <div className='line'></div>
          <p> 👕ootd 추천👖  </p>
           <img src={weatherImage} />
          </div>
      )}
    </div>
    </WeatherBlock>
  );
}
export default Weather;