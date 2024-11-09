/*
variable 선언하기
1) var - 더이상 쓰지 않는다.
2) let
3) const
*/

var name = '코드팩토리';
console.log(name);

var age = 32; //숫자일때는 '' 넣지 않기
console.log(age);

let ive = '아이브';
console.log(ive);

/*
let과 var의 차이점은 값을 추후 변경할 수 있다.
*/

ive='안유진'; //ive라는 변수의 값이 변경
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리';

/**
 * const는 변수를 변경할 수 없다.
 * 선언과 할당
 * 1) 선언 = 변수를 선언하는 것.
 * var name; 
 * 2) 할당 = 값을 넣어주는것
 * var name = '코드팩토리';
 */