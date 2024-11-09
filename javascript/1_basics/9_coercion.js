/**
 * 타입 변환
 * Typee Conversion
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

//명시적

let stringAge = age.toString();

console.log(typeof stringAge,stringAge); //string 32
// 명시적인 타입 변환

//암묵적

let test = age; // test는 age와 같은 number타입이 된다.
let test2 = age + ''; // 암묵적으로 String으로 변환
console.log(typeof test2,test2); // string 32

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString()); //string
console.log(typeof (true).toString()); //string

/**
 * 숫자 타입으로 변환
 * 
 */
console.log(typeof parseInt('0'),parseInt('0')); //number 0
console.log(typeof parseFloat('0.99'),parseFloat('0.99')); //number 0.99

/**
 * boolean
 * 
 * 1)아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 모두 false를 반환한다.
 */
console.log(!'x'); //false -> ''안에 값이 있으면 true이다.
console.log(!!'x'); //true