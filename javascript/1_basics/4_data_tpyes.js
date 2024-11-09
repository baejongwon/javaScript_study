/**
 * Data Types
 * 여섯개의 primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * primitive Type
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (참/거짓)
 * 4) undefinde (언디파인드 정의x)
 * 5) null(널)
 * 6) Symbol (심볼)
 * 7) Object (객체)
 *  - Function
 *  - Array
 *  - Object
 * 
 */

/**
 * Number
 */
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age); //어떤 타입인지 알기 위해서
console.log(typeof tempature);
console.log(typeof pi);
console.log('---------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('---------------');
/**
 * String
 */

const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

/**
 * Template Literal
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력
 */

const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);

const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);

const backSlash = '아이브\\코드팩토리';
console.log(backSlash);

const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);
console.log('---------------');
//위 과정이 불편해서 생긴게 Template Literal
const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);
console.log('---------------');
const iveWonYoung3 = `어떤값을 입력해도 '' 전부 그대로 출력
/ / / / /`;
console.log(iveWonYoung3);

console.log('---------------');
console.log(iveYuJin + ' 글자추가');
console.log(`${iveYuJin} 안유진`);

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;

console.log(isTrue);
console.log(isFalse);
console.log(typeof isTrue);
console.log(typeof isFalse);

console.log('---------------');

/**
 * undefined
 * 사용자가 직접 값을 초기화하지 않을때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */

let noInit;
console.log(noInit); //출력 값 undefined
console.log(typeof noInit); // 출력 값 undefined
console.log('---------------');

/**
 * null 타입
 * nudefined와 마찬가지로 값이 없다는 뜻
 * js에서는 개발자가 명시적으로 없는 값으로 초기화 할때
 * 
 */
let init = null;
console.log(init); //출력 null
console.log(typeof init); // 출력 object ==> 일종의 버그
console.log('---------------');
/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol함수를 호출해서 사용한다.
 * 
 */

const test1 = '1';
const test2 = '2';
const test3 = '1';

console.log(test1 === test2); //false
console.log(test1 === test3); //true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); //false
console.log('---------------');

/**
 * Object 타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져있다.
 * key:value
 */

const dictionary ={
    red: '빨간색', // 콜론을 기준으로 왼쪽이 키 오른쪽이 벨류
    orange: '주황색',
    yellow: '노란색',
};
console.log(dictionary); //{ red: '빨간색', orange: '주황색', yellow: '노란색' }
console.log(dictionary['red']); // 빨간색

/**
 * Array Type
 * 
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */
const iveMembersArray = [
    '안유진','가을','레이','장원영','리즈','이서',
];

console.log(iveMembersArray);

/**
 * index
 * index는 0부터 실행
 */
console.log(iveMembersArray[0]); //안유진

for(let i=0; i<5; i++){
    console.log(iveMembersArray[i]); 
    /*
    안유진
    가을
    레이
    장원영
    리즈
    */
}

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 한다.
 * C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 갑에의해 타입을 "추론" 한다.
 * JS => dynamic typing
 */

