// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// const person = {
//   name: 'jisung',
//   age: 27,
//   gender: 'male',
// };

// TS에서 interface를 사용한다면 JS file이 생성되었을 때,
// interface 내용은 compile되지 않음
// Class로 만든다면 TS에서 만든 내용이 JS에서도 보이게 됨

class Human {
  // JS에서 public 등의 속성이 없기 때문에 보이지 않음
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const jian = new Human('Jian', 23, 'female');

// gender args => optional ( using '?')
const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

// object를 넘길 때 interface를 이용해서
// interface와 동일한 구조를 갖는지 확인함
const sayHis = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

const res = sayHis(jian);
console.log(res);

// typescript => 필요한 args를 이용해서 함수를 호출하지 않으면
// compile부터 안됨
//sayHi(name);

export {};
