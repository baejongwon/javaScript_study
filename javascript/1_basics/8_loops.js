/**
 * Loops
 * 
 * 1) fro
 * 2) while
 */

for(let i =0; i<5;i++){
    console.log(i);
    /*
    0
    1
    2
    3
    4
    */
}

let square = '';
let side = 6;
for(let i=0;i<side;i++){
    for(let j=0;j<side;j++){
        square += "*" ;
    }
   square += '\n'; 
}
console.log(square); //정사각형 출력

/**
 * for...in
 * 키를 key in
 */

const yuJin ={
    name: '안유진',
    year: 2003,
}

for(let key in yuJin){
    console.log(key);
    /*
    name
    year
    */
}

const iveMembersArray = ['안유진','가을','레이','장원영','리즈','이서'];
// 리스트에서는 index값을 받을 수 있다.
for(let key in iveMembersArray){
    console.log(key);
    /**
    0
    1
    2
    3
    4
    5
     */
    console.log(`${key}:${iveMembersArray[key]}`);
    /*
    0:안유진
    1:가을
    2:레이
    3:장원영
    4:리즈
    5:이서
    */
}

/**
 * for...of
 * 값을 가져오고 싶을때는 value of
 */
for(let value of iveMembersArray){
    console.log(value);
    /*
    안유진
    가을
    레이
    장원영
    리즈
    이서
    */
}
    
/**
 * while
 * 
 */
let number = 0;

while(number<10){
    number ++;
    console.log(number);
    /*
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    */
}

/**
 * do...while
 * 먼저 do를 실행 하고 나서 조건을 판단한다.
 * 현업에서는 잘 안씀
 */
number = 0;
do{
    number++;
}while(number < 10){
    
}
console.log(number); // 10

/**
 * break
 * continue
 */
console.log('=====================');
for(let i =0; i<10; i++){
    if(i === 5){
        break;
    }
    console.log(i); 
}

/* 5일때 깨짐
0
1
2
3
4
*/
console.log('=====================');
for(let i =0; i<10; i++){
    if(i === 5){
        continue; //5일때 스킵하고 다음 loof로 넘어간다.
    }
    console.log(i); 
}
/*
0
1
2
3
4
6
7
8
9
*/