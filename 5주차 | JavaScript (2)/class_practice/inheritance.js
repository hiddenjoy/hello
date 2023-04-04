// 부모 클래스 정의하기
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}이(가) 소리를 냅니다.`);
  }
}

// 자식 클래스 정의하기
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name}이(가) 멍멍 짖습니다.`);
  }

  fetch() {
    console.log(`${this.name}이(가) 공을 가져옵니다.`);
  }
}

// 객체 생성하기
const dog = new Dog("뽀삐");
dog.speak(); // 뽀삐이(가) 멍멍..
dog.fetch(); // 뽀삐이(가) 공을..

// 고양이 만들기
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name}이(가) 야옹 웁니다.`);
  }

  scratch() {
    console.log(`${this.name}이(가) 문을 긁습니다.`);
  }
}

// 객체 생성하기
const cat = new Cat("나비");
cat.speak(); // 나비이(가) 야옹..
cat.scratch(); // 나비이(가) 문을..
