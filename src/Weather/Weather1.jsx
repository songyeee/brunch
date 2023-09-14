import axios from 'axios';
import { async } from 'q';
import React, { useState } from 'react';
import styled from 'styled-components';

const ContainerWrap = styled.div`
    width: 100vw;
    height: 100vh;
    border: 1px gray solid;

    .Weatherbox1{
        left: 50%;
        top:50%;
        transform: translate(-50%, -50%);
        position: absolute;
        border: 1px blue solid;
        padding: 20px;
    }
`;
const ResultWrap = styled.div`
    margin-top:60px;
    padding: 10px;
    border: 1px black solid;
    border-radius:8px;
`;

function Weatherbox1() {
    const API_KEY = "13370407832c91a4e9588f1ce73f6611";
    
    const [location, setLocation] = useState('');
    const [result,setResult] = useState({});

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    
    const searchWeather = async (e) =>{
        if(e.key ==='Enter'){
            try{
                const data = await axios({
                    method:'get',
                    url: url
                })
                console.log(data.data);
                setResult(data.data);
            }
            catch(err){
                alert(err);
            }
        }
    }

  return (
    <ContainerWrap>
        <div className='Weatherbox1'>
            <input 
            placeholder = "도시를 입력하세요"
            value={location}
            onChange={(e)=>setLocation(e.target.value)} 
            type="text"
            onKeyDown={searchWeather}
            />
            {
                Object.keys(result).length !==0 && (
                    <ResultWrap>
                        <div className='city'>{result.name}</div>
                        <div className='temprature'>{result.main.temp}</div>
                        <div className='sky'>{result.weather[0].main}</div>
                    </ResultWrap>
                    )
                }

        </div>
    </ContainerWrap>
  )
}

export default Weatherbox1;
