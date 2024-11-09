/**
 * if and Switch
 */
let number = 5;

if(number %2 ===0){
    console.log('짝수 입니다.')
}else{
    console.log('홀수 입니다.')
}

const englishDay = 'monday';

let koreanDay;

switch(englishDay){
    case 'monday' : //englishDay가 monday인 경우
        koreanDay = '월요일';
        break;
    case 'tuesday' :
        koreanDay = '화요일';
        break;
    case 'wendnesday' :
        koreanDay = '수요일';
        break;
    default :
        koreanDay = '월 화 수요일이 아닙니다.';
        break;
}
console.log(koreanDay) 