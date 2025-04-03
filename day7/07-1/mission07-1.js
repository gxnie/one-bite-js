// 버튼 클릭 시 텍스트 요소의 내용을 변경하는 함수를 작성하세요.

// 버튼 요소 가져오기
let $button = document.getElementById("changeTextButton");

// 텍스트 요소 가져오기
let $text = document.getElementById("text");

let changeText = () => {
  // 텍스트 내용을 'abc'로 변경
  $text.textContent = "abc";
};

// 버튼 클릭 시 함수 실행
$button.addEventListener("click", changeText);

// $button -> element : 이벤트를 감지할 DOM요소
// .addEventListener(event, handler);
// event : 감지하고싶은 이벤트 종류 ( 클릭,키다운 등)
// handler : 이벤트가 발생했을 때 실행할 함수
