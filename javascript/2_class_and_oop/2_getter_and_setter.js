/**
 * getter and setter
 */

class IdolModel {
    name;
    year;
    
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할떄
     * 2) private한 값을 반환할때
     */
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }
    /**
     * setter는 값을 바꿀때
     */

    set setName(name){
        return this.name = name;
    }
    set setYear(year){
        return this.year = year;
    }
}
const yuJin = new IdolModel('안유진',2003);
console.log(yuJin); //IdolModel { name: '안유진', year: 2003 }
console.log(yuJin.nameAndYear); //안유진-2003
console.log('-----------------------');
yuJin.setName = '장원영';
console.log(yuJin); //IdolModel { name: '장원영', year: 2003 }

class IdolModel2{
    #name;
    year;

    constructor(name,year){
        this.#name = name;
        this.year = year
    }

    get name(){
        return this.#name;
    }
    set setName(name){
        return this.#name = name;
    }
}
const yuJin2 = new IdolModel2('안유진',2003);
console.log(yuJin2); //IdolModel2 { year: 2003 }
console.log(yuJin2.name); //안유진
yuJin2.setName = '장원영'
console.log(yuJin2.name); //장원영