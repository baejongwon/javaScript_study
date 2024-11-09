/**
 * Hoisting
 */

console.log('Hello');
console.log('World');

console.log(name); //undefined
var name = '코드팩토리';
console.log(name); //코드팩토리

/**
 * Hositing은 무엇인가?
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * let과 const도 동일하다. 하지만 막아준다.
*/
console.log(yuJin);
let yuJin = '안유진'; //Cannot access 'yuJin' before initialization 에러 -> 값을 미리 가져오는 현상을 막아준다.

console.log(yuJin2); // Cannot access 'yuJin' before initialization 에러  -> 값을 미리 가져오는 현상을 막아준다.
let yuJin2 = '안유진';