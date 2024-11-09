/**
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈 +
 * 2) 뺄셈 -
 * 3) 곱셈 *
 * 4) 나눗셈 / 
 * 5) 나머지 %
 */

/**
 * 연산자의 위치
 * 
 */
let number = 1;
let result = 1;
console.log(result); // 1

result = number ++; //result에 number를 추가한 뒤  number를 ++ 해준다.
console.log(result,number); //1 2

result = number --; 
console.log(result,number); //2 1

result = ++ number; //미리 계산을 한뒤에 저장
console.log(result,number); // 2 2

result = -- number;
console.log(result,number); // 1 1

/**
 * 현업에서는 --를 앞으로 쓰지 않는다.
 */

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
let sample = '99';

console.log(+sample); //99
console.log(typeof +sample); //number

console.log(sample); //99
console.log(typeof sample); //string

sample = true;
console.log(+sample); //1
console.log(typeof +sample); //number

sample = false;
console.log(+sample); //0
console.log(typeof +sample); //number

sample ='안유진';
console.log(+sample); //NaN -> Not a Number 숫자가 아니다.
console.log(typeof +sample); //number

sample='99';
console.log(-sample); //-99

/**
 * 할당 연산자
 */
number = 100;
console.log(number); //100

number += 10;
console.log(number); //110


/**
 * 비교 연산자
 * 1) 값의 비교 ==
 * 2) 값과 타입의 비교 ===
 */

console.log(5 == 5); // true
console.log(5 =='5'); // true


console.log(5 === 5); // true
console.log(5 ==='5'); // false 타입까지 비교하기 때문에

console.log(5 != 5); // false
console.log(5 !='5'); // false

console.log(5 !== 5); // false
console.log(5 !=='5'); // true
console.log('--------------------');
/**
 * 대소 관계 비교 연산자
 * 
 */
console.log(100>1); //true

console.log('--------------------');
/**
 * 삼항 조건 연산자
 * 
 */
console.log(10 > 0 ? '10이 0 보다 크다' : '10이 0보다 작다'); //10이 0 보다 크다. 참일때는 왼쪽 거짓일때는 오른쪽.
console.log('--------------------');
/**
 * 논리 연산자
 * 1) && 
 * 2) ||
 */
// && 조건은 모두 참이여야 참을 반환한다.
console.log(true && true);  // true 
console.log(true && false);  // false
console.log('--------------------');
console.log(true || true);  // true 
console.log(true || false);  // true
console.log(false || false);  // false
console.log('--------------------');

/**
 * 단축평가
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log(true && '아이브'); // 아이브
console.log(false && '아이브'); // false
console.log(true || '아이브'); // true
console.log(false || '아이브'); // 아이브

console.log(true && true && '아이브'); //아이브
console.log(true && false && '아이브'); //false

console.log(true || true || '아이브'); //true
console.log(true || false || '아이브'); //true
console.log(false || false || '아이브'); //아이브
console.log(false || true || '아이브'); //true

/**
 * 지수 연산자
 */
console.log( 2 ** 2); // 2의 2승 => 4

/**
 * null 연산자
 */
let name;
console.log(name); //undefined
name = name ?? '코드팩토리'; //name이 null이거나 undefined이면 오른쪽 값을 저장해라
console.log(name); //코드팩토리
name = name ?? '아이브';
console.log(name); //코드팩토리