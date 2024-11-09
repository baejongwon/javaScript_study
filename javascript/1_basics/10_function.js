/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환 받고 싶다면 어떻게 해야할까?
 */
console.log((2*10 / 2 % 3).toString()); //1
console.log((3*10 / 2 % 3).toString()); //0
//코드가 반복되기 때문에 중복되는 코드를 반복되지 않게 바꾼다.

/**
 * Dry
 */
console.log('--------------------------')
function calcuate(number){ //파라미터 사용 => 함수에서 밖에서 입력받을 값을 파라미터라고 한다.
    console.log((number*10 / 2 % 3).toString()); //2
}
calcuate(10);//실제 입력하는 값을 argument라고 한다.
//파라미터 = number 아규먼트 = 10
console.log('--------------------------')
function multiply(x,y){
    console.log(x*y);
}
multiply(2,3); //6

console.log('--------------------------')
function multiply2(x,y){
    return x*y;
}

const result = multiply2(2,5);
console.log(result); //10
console.log('--------------------------')

/**
 * Arrow 함수
 * 
 */
const multiply3 = (x,y) =>{
    return x*y;
}
console.log(multiply3(3,4)); //12

//위 코드를 간결하게
const multiply4 =(x,y) => x*y;
console.log(multiply3(3,4)); //12
console.log('--------------------------')

const multiply5 = function(x,y,z){
    console.log(arguments);
    return x*y*z;
}
console.log(multiply5(2,3,4));
/**
[Arguments] { '0': 2, '1': 3, '2': 4 }
24
 */
console.log('--------------------------')
