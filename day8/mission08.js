/** 미션1. 자바스크립트의 this

다음 코드에서 `regularFunction`과 `arrowFunction`이 있습니다.

두 함수 모두 `this`가 어떻게 작동하는지 확인하기 위해 각각 `this.value`를 출력하려고 합니다.

각 함수의 `this`가 무엇을 가리키는지 확인하고, 각 함수가 정상적으로 `this.value`를 출력할 수 있도록 코드를 수정하세요.
(주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!!)
**/

const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 42
  },
  arrowFunction: () => {
    console.log(this.value); // 전역객체 window
  },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)

// 일반 함수는 호출 주체에 따라 this가 결정되는 동적 바인딩인데,
// 화살표 함수는 상위 스코프의 this를 그대로 사용하는 정적 바인딩이기 때문입니다.
// 화살표 함수의 상위 스코프의 this가 현재 당장 js코드에 없기때문에 window로 지정되어 undefined가 뜨게됩니다.
