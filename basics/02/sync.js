// 순서대로 실행하기  (결과 비교: 02\results\sync.js)

// function displayA() {
//   console.log("A");
// }
// function displayB() {
//   setTimeout(() => {
//     console.log("B");
//   }, 2000);
// }
// function displayC() {
//   console.log("C");
// }

// displayA();
// displayB();
// displayC();

// 자바스크립트는 싱글스레드(동시작업이 안되는 언어)
// A
// C
// B

// 비동기처리(A, B, C 순서로 처리하도록 )
// 1. callback
function display2A() {
  console.log("2A");
}
function display2B(callback) {
  setTimeout(() => {
    console.log("2B");
    callback();
  }, 2000);
}
function display2C() {
  console.log("2C");
}

display2A();
display2B(display2C);

// 2. 프로미스
// 3. async/await
