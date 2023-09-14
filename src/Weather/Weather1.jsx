import axios from 'axios';
import { async } from 'q';
import React, { useState } from 'react';
import styled from 'styled-components';

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
    <containerWrap>
        <div className='weahterbox1'>

        </div>
    </containerWrap>
  )
}

export default Weather1;

const weahterbox1 = styled.div
width:100vw;
