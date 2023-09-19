# 🥪 Brunch
언제 어디서든 간편하게 볼 수 있는 오늘의 정보(뉴스정보, 날씨정보)를 한 페이지에서 확인 할 수 있는 프로그램

# 👥팀원 역할
* 양송이
    * Header, Clock, Weather, News 컴포넌트 구현 및 해당 컴포넌트 CSS 수정
* 이가은
    * Weatherbox1 컴포넌트 구현 및 CSS, 전반적인 프로그램 오류 및 CSS , 기능 구현 설명, README.md 정리
##  👩‍💻 페이지별 중요 기능

usePromise - hook\
Clock - render, component\
MainNews - useEffect, useState, usePromise\
MainNewsItem - styled-components\
Weather - axios, useEffect, useState, styled-components\
Weatherbox - axios, useEffect, useState, styled-components

##  🧰 Main 화면 구성
![Alt text](/READMEImg/기능구현29.PNG)

## 🔧 기능 및 기능 구현
* 받아온 뉴스 데이터 속 제목과 내용을 사용자에게 일정한 길이로 출력   
* 뉴스 API 에서 오늘의 뉴스 data를 받아와서 매일 새로운 뉴스 기사 출력
![Alt text](/READMEImg/기능구현24.PNG)

* Geolocation API로 사용자의 현재 위치 정보 \
Weather API로 날씨 정보를 받아서 별도의 입력 없이도 현재 위치의 날씨를 바로 확인할 수 있도록 구현 (현재 날씨, 현재 기온, 오늘의 최고 · 최저 날씨)
* 현재 기온 data를 받아서, 일정한 범위마다 다른  OOTD 추천 
![Alt text](/READMEImg/기능구현22.PNG)
    * 20 ºC 이하일 경우\
    ![Alt text](/READMEImg/기능구현23.PNG)
     * 10 ºC 이하일 경우\
    ![Alt text](/READMEImg/기능구현25.PNG)

* 오늘의 날짜와 시간 출력 (분 단위로 렌더링 )\
![Alt text](/READMEImg/기능구현26.PNG)
* 지역 명을 입력하면 입력 받은 나라, 도시 이름, 온도, 기상 출력
![Alt text](/READMEImg/기능구현28.PNG)
![Alt text](/READMEImg/기능구현27.PNG)

