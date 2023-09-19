#  `REACT PROJECT`
언제 어디서든 간편하게 볼 수 있는 오늘의 정보(뉴스정보, 날씨정보)를 한 페이지에서 확인 할 수 있는 프로그램

##  `페이지별 중요 기능`

usePromise - hook\
Clock - render, component\
MainNews - useEffect, useState, usePromise\
MainNewsItem - styled-components\
Weather - axios, useEffect, useState, styled-components\
Weatherbox - axios, useEffect, useState, styled-components

## `기능 및 기능 구현`

* 받아온 뉴스 데이터 속 제목과 내용을 사용자에게 일정한 길이로 출력   
* 뉴스 API 에서 오늘의 뉴스 data를 받아와서 매일 새로운 뉴스 기사 출력
![Alt text](/READMEImg/기능구현24.PNG)

* Geolocation API로 사용자의 현재 위치 정보 \
Weather API로 날씨 정보를 받아서 별도의 입력 없이도 현재 위치의 날씨를 바로 확인할 수 있도록 구현 (현재 날씨, 현재 기온, 오늘의 최고 · 최저 날씨)
* 현재 기온 data를 받아서, 일정한 범위마다 다른  OOTD 추천 
![Alt text](/READMEImg/기능구현22.PNG)
    * 20 ºC 이하일 경우
    ![Alt text](/READMEImg/기능구현23.PNG)
     * 10 ºC 이하일 경우
    ![Alt text](/READMEImg/기능구현25.PNG)

* 오늘의 날짜와 시간 출력 (분 단위로 렌더링 )
![Alt text](/READMEImg/기능구현26.PNG)
* 지역 명을 입력하면 입력 받은 나라, 도시 이름, 온도, 기상 출력
![Alt text](/READMEImg/기능구현27.PNG)

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
