// fs 모듈의 readFile 함수 연습하기 (결과 비교 파일은 03\results\read-3.js)
const fs = require("fs");

fs.readFile("./example.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
// <Buffer 4e 6f 64 65 2e 6a 73 20 69 73 20 61 6e 20 6f 70 65 6e 2d 73 6f 75 72 63 65 2c 20 63 72 6f 73 73 2d 70 6c 61 74 66 6f 72 6d 20 4a 61 76 61 53 63 72 69 ... 110 more bytes>

// 사람이 식별할 수 있는 코드로 인코딩해줘야 함
fs.readFile("./example.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
// Node.js is an open-source, cross-platform JavaScript runtime environment.
// Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다.

// read한 내용을 기록하기
fs.readFile("./example.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  fs.writeFile("./test.txt", data, () => {
    if (err) {
      console.log(err);
    }
    console.log("test.txt is saved");
  });
});
// test.txt 파일이 생성됨
