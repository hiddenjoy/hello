// 변수, 상수
let myVariable = 123;
const myConstant = "Hello, world!";

console.log(myVariable);
console.log(myConstant);

// 데이터 타입
let myNumber = 123;
let myString = "Hello, world!";
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let myObject = { name: "John", age: 30 };
let mySymbol = Symbol("mySymbol");

console.log(typeof myNumber); // number
console.log(typeof myString); // string
console.log(typeof myBoolean); // boolean
console.log(typeof myNull); // object (이는 JavaScript의 버그로 인해 발생한 것입니다)
console.log(typeof myUndefined); // undefined
console.log(typeof myObject); // object
console.log(typeof mySymbol); // symbol

//연산자
let x = 10;
let y = 5;

console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(parseInt(x / y)); // 2
console.log(x % y); // 0

console.log(x > y); // true
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // false
console.log(x === y); // false
console.log(x !== y); // true

let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

//조건문
let age = 20;

if (age >= 18) {
  console.log("adult");
} else if (age >= 13) {
  console.log("teenager");
} else {
  console.log("child");
}

//switch문
let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("apple");
    break;
  case "banana":
    console.log("banana");
    break;
  case "orange":
    console.log("orange");
    break;
  default:
    console.log("unknown");
}

//for문
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//while문
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// 배열 순회
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(function (element) {
  console.log(element);
});

// 함수
function add(a, b) {
  return a + b;
}

let result = add(1, 2);
console.log(result);

// 객체
let myObject2 = {
  name: "John",
  age: 30,
  isMarried: false,
};

console.log(myObject2.name);
console.log(myObject2.age);
console.log(myObject2.isMarried);

//배열

let myArray = ["apple", "banana", "orange"];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
