/**
 * copy by value는 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다.
 * 2) 객체는 copy bt reference다.
 */


//1) 값을 그대로 가져오는 경우
let original = '안녕하세요.';
let clone = original;

console.log(original); //안녕하세요.
console.log(clone); //안녕하세요.

clone += '안유진 입니다.';
console.log('-------------------------');
console.log(original); //안녕하세요.
console.log(clone); //안녕하세요.안유진 입니다.

//2)의 경우

let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);//{ name: '안유진', group: '아이브' }
console.log(cloneObj);//{ name: '안유진', group: '아이브' }
console.log('-------------------------');
originalObj['group'] = '코드팩토리';
console.log(originalObj); //{ name: '안유진', group: '코드팩토리' }
console.log(cloneObj); //{ name: '안유진', group: '코드팩토리' }

console.log(originalObj === cloneObj) //true -> object안에 값이 같다고 ture가 아니다.
console.log(original === clone) //false


console.log('-------------------------');
const yuJin1={
    name: '안유진',
    group: '아이브',
}
const yuJin2=yuJin1;

const yuJin3={
    name: '안유진',
    group: '아이브',
}
console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false


console.log('-------------------------');
/**
 * Spread Operator
 * 
 * 위치가 굉장히 중요하다!
 */
const yuJin4={
    ...yuJin3, //값은 같지만 메모리공간은 다른곳을 가르키기 때문에 틀리다. 완전히 새로운 값으로 복사를 하기 때문이다.
};

console.log(yuJin4);
console.log(yuJin4 === yuJin3); // false

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};

console.log(yuJin5); //{ year: 2003, name: '안유진', group: '아이브' }

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
}
console.log(yuJin7); //{ name: '코드팩토리', group: '아이브' }