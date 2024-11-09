/**
 * Object 객체
 */

//key : value pair
let yuJin ={
    name: '안유진',
    group: '아이브',
    dance : function(){
        return `${this.name}이 춤을 춥니다.`; //현재 객체를 가르킨다.
    }
};

console.log(yuJin); // { name: '안유진', group: '아이브', dance: [Function: dance] }
console.log(yuJin.name) // 안유진
console.log(yuJin['name']) // 안유진
const key = 'name';
console.log(yuJin[key]);// 안유진
console.log(yuJin.dance()); //안유진이 춤을 춥니다.

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';
console.log('--------------------------------------')
const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance:function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리'; //group이라는 key를 찾아서 바꾼다.
console.log(yuJin2);
yuJin2['englishName'] = 'An yu Jin'; //존재하지 않았던 키를 넣으면 새로 생긴다....
console.log(yuJin2);
/**
  name: '안유진',
  group: '코드팩토리',
  dance: [Function: dance],
  englishName: 'An yu Jin'
 * 
 */
delete yuJin2["englishName"];
console.log(yuJin2);

/**
 * 객체의 특징
 * 1) const로 선언할경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wonYoung ={
    name : '장원영',
    group: '아이브',
}
console.log(wonYoung);
// wonYoung{}; -> 1) 객체 자체를 변경x
wonYoung['group'] = '코드팩토리'; //2) 객체 안의 프로퍼티나 메서드는 변경 가능.
console.log(wonYoung); //{ name: '장원영', group: '코드팩토리' }

console.log('--------------------------------------')

//name이 배열일 경우
let yuJin3 = {
    name: ['안유진', '장원영', '이서'],  // name을 배열로 변경
    group: '아이브',
    dance: function(){
        return `${this.name[1]}이 춤을 춥니다.`; // 배열을 문자열로 변환
    }
};

console.log(yuJin3.name);   //[ '안유진', '장원영', '이서' ]        
console.log(yuJin3.name[0]); //안유진  
console.log(yuJin3.dance()); // 장원영이 춤을 춥니다.

/**
 * 모든 키 값 다 가져오기
 */
console.log('--------------------------------------')
console.log(Object.keys(wonYoung));


/**
 * 모든 value 값 다 가져오기
 */
console.log('--------------------------------------')
console.log(Object.values(wonYoung));

const name = '안유진';
const yuJin4 = {
    //name: name, //변수와 값의 이름이 같을때는 그냥 name으로 입력해도 된다.
    name,
};
console.log(yuJin4);