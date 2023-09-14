import axios from 'axios';
import { async } from 'q';
import React, { useState } from 'react';
import styled from 'styled-components';

const ContainerWrap = styled.div`
    width: 100vw;
    height: 100vh;
    border: 1px gray solid;

    .Weather1{
        left: 50%;
        top:50%;
        transform: translate(-50%, -50%);
        position: absolute;
        border: 1px blue solid;
        padding: 20px;
    }
`;


function Weather1() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=13370407832c91a4e9588f1ce73f66111`;
    const [loacation, setLocation] = useState('');
    const searchWeather = async (e) =>{
        if(e.key ==='Enter'){
            try{
                const data = await axios({
                    method:'get'
                })
            }
            catch(err){
                alert(err);
            }
        }
    }

  return (
    <ContainerWrap>
        <div className='weahterbox1'></div>
    </ContainerWrap>
  )
}

export default Weather1;
