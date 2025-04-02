/** 미션2. API 호출2

아래의 API 주소는 포켓몬들의 정보가 담겨있는 `data`를 반환합니다.
주어진 API 주소를 사용해, 아래의 조건을 모두 만족하는 코드를 작성하세요.

1. try/catch를 사용한 에러 핸들링
2. async/await을 사용한 비동기 처리
3. 받아온 데이터들 중 "color 값이 green"인 포켓몬의 정보들이 담긴 배열을 출력하세요.
4. 출력 결괏값 : (이상해씨, 이상해풀, 이상해꽃, 캐터피, 단데기, 모다피,
   우츠동, 우츠보트, 스라크의 정보가 담긴 9개의 객체들이 모인 배열)
*/

// API_URL 변수에 포켓몬 데이터를 가져올 API의 주소를 담음(const 사용해서 값 변경되지 않게 고정)
const API_URL = "https://pokemon-api-ecru-eta.vercel.app";

// getData라는 이름의 비동기 함수를 선언(화살표 함수 형태, async키워드 사용해서 비동기 처리)
const getData = async () => {
  // 에러 발생했을때, 에러 잡기위한 try-catch문
  try {
    // await을 사용해서 fetch()가 데이터를 가져올 때까지 기다림
    // fetch()는 주어진 URL로 HTTP 요청을 보냄
    let response = await fetch(API_URL);

    // response.json()을 통해 응답 데이터 JSON형태로 변환
    // await을 사용해서 변환 완료될때까지 기다림
    let data = await response.json();

    // API 응답 데이터는 { data: [...] } 형태
    // data.data를 통해 객체 배열을 가져옴
    // 위의 data 변수 이름 + 응답 데이터 안의 data: << 부분
    let pokemonArray = data.data;

    // filter() 메서드를 사용하여 배열에서 조건에 맞는 요소만 가져옴
    // elm은 포켓몬 객체 의미
    let answer = pokemonArray.filter((elm) => elm.color === "green");

    console.log(answer);
  } catch (error) {
    console.log(error);
  }
};

getData();
