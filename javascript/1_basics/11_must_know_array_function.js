/**
 * Function Methods
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);//[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

//push -> 맨끝에 값을 추가
iveMembers.push('코드팩토리'); //내용 추가
console.log(iveMembers);//[ '안유진', '가을', '레이', '장원영', '리즈', '이서', '코드팩토리']
console.log('--------------------------------')
//pop -> 맨끝 값을 출력한뒤 삭제
console.log(iveMembers.pop()); //코드팩토리
console.log(iveMembers);//[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log('--------------------------------')
//shift -> 맨 처음 값을 출력하고 삭제
console.log(iveMembers.shift());//안유진
console.log(iveMembers); //[ '가을', '레이', '장원영', '리즈', '이서' ]
console.log('--------------------------------')
//unshift -> 맨 처음 값에 추가
console.log(iveMembers.unshift('안유진'));//6
console.log(iveMembers); //[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log('--------------------------------')
//splice(0,3) -> 0번부터 2번까지 출력하고 삭제
console.log(iveMembers.splice(0,3)); //[ '안유진', '가을', '레이' ]
console.log(iveMembers); //[ '장원영', '리즈', '이서' ]

console.log('--------------------------------')


iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
//concat() -> 코드팩토리라는 값을 추가해준뒤 아애 새로운 array를 만들어서 출력해준다. 때문에 기존에 array는 건들지 않는다.
console.log(iveMembers.concat('코드팩토리'));[ '안유진', '가을', '레이', '장원영', '리즈', '이서', '코드팩토리' ]
console.log(iveMembers);[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log('--------------------------------')
//slice() -> splice에 원래 array가 변경되지 않는 기능
console.log(iveMembers.slice(0,3)); //[ '안유진', '가을', '레이' ]
console.log(iveMembers);  //[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log('--------------------------------')



// spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2); //[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log('--------------------------------')
let iveMembers3 = [
    iveMembers, ///...을 뺴면 리스트안에 리스트가 들어간다.
];
console.log(iveMembers3); // [ [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ] ]
console.log('--------------------------------')
/*
console.log([
    ...iveMembers, //완전 새로운 array를 만들기 떄문에 값이 다르다고 나온다
]=== iveMembers) ; //false
*/




/**
 * join()
 * array를 String 값으로 엮을때 많이 사용한다.
 */
console.log(iveMembers.join()); //안유진,가을,레이,장원영,리즈,이서 -> String으로 출력된다.
console.log(iveMembers.join('/')); //안유진/가을/레이/장원영/리즈/이서
console.log(iveMembers.join(', ')); //안유진, 가을, 레이, 장원영, 리즈, 이서

/**
 * sort() 정렬(오름차순)
 * reverse() 반대로 정렬
 */

iveMembers.sort();
console.log(iveMembers); //[ '가을', '레이', '리즈', '안유진', '이서', '장원영' ]

console.log(iveMembers.reverse()); //[ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]

let number = [
    1,
    9,
    7,
    5,
    3
];
console.log(number); //[ 1, 9, 7, 5, 3 ]
/**
 * a,b를 비교했을때
 * 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0 보다 큰 숫자를 반환
 * 2) a를 b보다 먼저 정렬하려면(앞에두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 * */

number.sort((a,b)=>{
    return a>b ? 1 : -1;
});
console.log(number); //[ 1, 3, 5, 7, 9 ]

console.log('--------------------------------')
number.sort((a,b)=>{
    return a>b ? -1 : 1;
});
console.log(number); //[ 9, 7, 5, 3, 1 ]

// map() -> 원래의 array를 건들지 않고 새로운 array를 반환한다.
console.log('--------------------------------')
console.log(iveMembers.map((x)=>x)); [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]
console.log(iveMembers.map((x)=>`아이브: ${x}`)); [ '아이브:장원영', '아이브:이서', '아이브:안유진', '아이브:리즈', '아이브:레이', '아이브:가을' ]

// console.log(iveMembers.map(function(x) {
//     return `아이브: ${x}`;
// }));

console.log('--------------------------------')
console.log(iveMembers.map((x)=>{
    if(x==='안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }
})) //[ '장원영', '이서', '아이브 : 안유진', '리즈', '레이', '가을' ]

console.log('--------------------------------')
//위와 같은 코드 쉽게
// console.log(iveMembers.map(function(x) {
//     if (x === '안유진') {
//         return `아이브: ${x}`;
//     } else {
//         return x;
//     }
// })); //[ '장원영', '이서', '아이브 : 안유진', '리즈', '레이', '가을' ]

/**
 * fliter()
 */
number = [1, 8, 7, 6, 3];

console.log(number.filter((x)=>true)); // [ 1, 8, 7, 6, 3 ]
console.log(number.filter((x)=>false)); //[]

console.log(number.filter((x)=>x % 2 === 0)); //[ 8, 6 ]
// console.log(number.filter(function(x){
//     return x % 2 === 0;
// }))
console.log('--------------------------')
// find
console.log(number.find((x)=>x % 2 ===0)) // 8 -> 가장 첫번쨰로 해당되는 값을 반환시킨다.
// findIndex
console.log(number.findIndex((x)=>x % 2 ===0)) // 1 -> 인덱스 반환

// reduce()
// (p, n) => 이전과 다음
// ,0 시작하고싶은 값
// 기존에 반환했던 값이 p에 들어가고 다음값이 n에 들어간다.
console.log(number.reduce((p, n)=> p + n,0)); // 25

/**
 * number = [1, 8, 7, 6, 3];
 * console.log(number.reduce((p, n)=> p + n,0));
 *              |-------------------------| |
 *                       콜백함수           초기값
 *                            1 2       3
 *                            4 5       6
 *                            7 ...
 * 1) 초기값인 0이 p에 입력이 된다.
 * 2) number 어레이의 첫번쨰 값인 1이 n에 입력 된다.
 * 3) p+n 즉, 0+1의 결과 값인 1이 반환된다.
 * 4) 3에서 반환된 값 (1)이 p에 입력된다.
 * 5) 어레이의 두번째 값인 8이 n에 입력된다.
 * 6) 1+8인 결과값 9가 반환된다
 * 7) 9가 p에 입력된다. 그리고 7이 n에 입력된다.
 * 8) 9+7 => 16이 반환
 * 9) 16에 p에 6이 n에 즉 22반환
 * 10) 22가 p에 3이 n에 22+3은 25가 반환
 */

console.log('--------------------------')
//위 reduce를 function으로 만들었을때..
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// 사용 예시
const number2 = [1, 8, 7, 6, 3];
console.log(sumArray(number2)); // 출력: 25