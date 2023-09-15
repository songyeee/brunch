import React from 'react'
import './img/boots.png';
import './img/cardigan.png';
import './img/coat.png';
import './img/hoodie.png'
import './img/jacket.png'
import './img/jeans.png'
import './img/lstshirts.png'
import './img/puffer.png'
import './img/rainboots.png'
import './img/sandals.png'
import './img/scarf.png'
import './img/shoes.png'
import './img/sleeveless.png'
import './img/sstshirts.png'
import './img/sweater.png'
import './img/sweater2.png'
import './img/umbrella.png'
import './img/winterhat.png'

function Ootd() {
  let clothes = document.querySelector('.today-clothes');
  let currentTemp = result.main.temp;

  let realWinter = currentTemp <= 5;  // 패딩
  let winter = currentTemp >=6 && currentTemp <=9;  // 코트
  let lateFall = currentTemp >=10 && currentTemp <=11; // 야상
  let fall = currentTemp >= 12 && currentTemp <=16; // 가디건
  let earlyFall = currentTemp >=17 && currentTemp <=19;  // 후드티
  let lateSummer = currentTemp >=20 && currentTemp <=22;  // 긴팔티
  let summer = currentTemp >=23 && currentTemp <=26;  // 반팔
  let hotSummer = currentTemp >=27; // 여름 절정

  if(winter){
    background.style.backgroundImg = './img/boots.png', './img/puffer.png'
  }
  return (
    <div>Ootd</div>
  )
}

export default Ootd;