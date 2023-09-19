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

## 💊 프로젝트를 하면서 깨달은 점
* 양송이
    * 이번 프로젝트를 진행하면서, REACT 프로그래밍 자체의 이해도가 많이 향상되었고
    여러가지 API와 그의 요소들을 사용해봄으로써 API 사용법도 어느 정도 익숙해졌다.
    특히, CSS를 사용하는 부분에 있어서, 더 많은 요소들의 사용법을 알게 되었다.  
    또, 팀원과 함께 GIT 저장소를 사용하면서 평소 낯설고 막연하게 느껴졌던 commit 이나 git pull, push 등에 익숙해 질 수 있는 시간이었다. 

* 이가은  
    * REACT 프로젝트를 한다고 해서 막막했지만 그래도 다양한 자료를 찾아가면서 어떤 식으로 기능이 구현되는지 알게 되었고, REACT의 사용법에 있어서도 알게 되었다.
    여러 가지 에러 상황에 있어 어떻게 하면 해결이 되는지도 알 수 있었다. git으로 팀원 간의 협업을 하는 법도 알게 되었고, 익숙하지 않아 사용이 어려웠던 git도 익숙해지는 시간이었다.
    마지막으로, 다양한 프로젝트를 할수록 느끼는 것 중에 하나가 바로, 팀원 간의 의사소통이 잘되면 제출 기한 보다 빠르게 마무리 할 수 있다는 것을 알았다. 그만큼 의사소통이 중요하다는 것을 배울 수 있는 시간이었다.




