/* 미션2. DOM API & Select Tag
id 가 app인 div 요소의 내부에 아래의 코드들을 넣어주세요.

<select id="skills">
    <option value="javascript">Javascript</option>
    <option value="next">Next.js</option>
    <option value="react">React.js</option>
    <option value="typescript">TypeScript</option>
</select>

> 단, createElement, appendChild를 사용해서 생성해주세요.
> select 태그의 값을 변경할 때 마다, 변경된 값을 출력하는 기능도 작성해주세요. */

// 부모 요소 가져오기
let app = document.getElementById("app");

// select 요소 생성
let select = document.createElement("select");
select.id = "skills";

// 단순하게 하드 코딩했을 때 예시
// option이라는 element?요소? 태그를 새로 만들어준다
let newOption = document.createElement("option");

// 그 요소에 text로 javascript를 추가해준다.
newOption.textContent = "Javascript";

// value값을 넣어준다.
newOption.value = "javascript";

// 옵션 배열
// 태그의 값을 변경할 때마다, 변경된 값을 출력해야함 -> 반복문으로 하나씩 꺼내줌
let options = [
  { text: "Javascript", value: "javascript" },
  { text: "Next.js", value: "next" },
  { text: "React.js", value: "react" },
  { text: "TypeScript", value: "typescript" },
];

// 옵션 추가하기
// forEach()를 사용해서 options 배열의 객체를 하나씩 가져옴
options.forEach((optionData) => {
  // option 태그를 새로 만들어줌
  let newOption = document.createElement("option");

  // 새로 만들어준 태그의 text,value 값을 넣어준다.
  // optionData라는 변수(내가 직접 정해주는 것)에 배열의 각 객체를 담아준다
  newOption.textContent = optionData.text;
  newOption.value = optionData.value;

  // select 태그 안에 option태그 추가
  select.appendChild(newOption);
});

// 선택값 변경 이벤트
// change : 사용자가 다른 옵션을 선택할 때마다 실행됨
select.addEventListener("change", () => {
  // select.value : 선택된 값
  console.log("선택된 값:", select.value);
});

// select를 부모 요소(app)에 추가
app.appendChild(select);
