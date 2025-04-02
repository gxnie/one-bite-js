/** 미션1. API 호출1

아래와 같은 `fakeApiCall` 함수가 있습니다. 이 함수는 2초 후에 사용자 정보를 반환합니다.

`async`와 `await`를 사용하여 이 API 호출을 기다리고, 사용자 이름을 콘솔에 출력하는 `fetchUserData` 함수를 작성하세요. */

function fakeApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe", age: 30 });
    }, 2000);
  });
}

// fetchUserData 함수 완성

// async 사용해서 비동기 함수로 만듬!(await 사용 가능)
const fetchUserData = async () => {
  try {
    // await을 사용해서, fakeApiCall()의 작업이 완료될때까지 기다림
    // Promise가 resolve(해결)되어 { name: "John Doe", age: 30 } 객체 반환
    let result = await fakeApiCall();

    // result 객체에서 name 속성만 출력
    console.log(result.name);
  } catch (error) {
    console.log(error);
  }
};

fetchUserData();
