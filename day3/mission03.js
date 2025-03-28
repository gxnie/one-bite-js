/** 두 숫자의 곱을 반환하는 화살표 함수를 작성하고, 3과 4를 인자로 호출하여 결과를 출력하세요. */

const multiply = (a, b) => {
    return a + b;
}

console.log(multiply(3, 4));


/** 책의 제목과 저자 이름을 속성으로 가진 book 객체를 만들고, 책의 정보를 반환하는 getSummary 메서드를 작성하세요. */

const book = {
    title : '한입 챌린지 with 자바스크립트',
    name : 'Genie',

    getSummary: function (){
        return `책 제목은 ${this.title}이고 저자는 ${this.name}이다.`;
    }
};

console.log(book.getSummary());


/** 두 숫자 a와 b를 인자로 받아, b에 5를 더한 값을, a에 더한 결과를 반환하는 sumNumbers 함수를 작성하세요. */

function sumNumbers(a, b) {
    function addFive(number) {
        return number + 5;
    }
    return a + addFive(b);
}
console.log(sumNumbers(3, 7)); // 출력: 15 (7에 5를 더한 후 3을 더함)
console.log(sumNumbers(10, 5)); // 출력: 20 (5에 5를 더한 후 10을 더함)```