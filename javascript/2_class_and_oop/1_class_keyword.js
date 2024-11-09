/**
 * 클래스 이론
 * 클래스의 정의
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한
 * 변수와 메소드(함수)를 정희하는 일종의 틀이다.
 * 
 * --> 정보를 일반화해서 정리하는 방법이다.
 * 
 * 클래스는 일종의 틀 -> ex) 이름, 출생년도
 * 객체(인스턴스) -> 실제 각각의 데이터 -> ex)안유진,2003년생 가을, 2002년생 등
 */

/**
 * Class ketword
 */

class IdolModel {
    name;
    year;
    
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    //클래스안에서 함수를 정의하면 메소드라고 부른다.
    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;

    };
}

// constructor - 생성자
const yuJin = new IdolModel('안유진',2003);
console.log(yuJin); //IdolModel { name: '안유진', year: 2003 }

console.log(yuJin.name); // 안유진
console.log(yuJin.year); // 2003
console.log(yuJin.sayName()); //안녕하세요 저는 안유진입니다.

const wonYoung = new IdolModel('장원영',2003);
console.log(wonYoung); //IdolModel { name: '장원영', year: 2003 }

console.log(wonYoung.name); // 장원영
console.log(wonYoung.year); // 2003
console.log(wonYoung.sayName()); //안녕하세요 저는 장원영입니다.

console.log(typeof IdolModel); //function
console.log(typeof yuJin); //object