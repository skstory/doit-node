// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)
const path = require("path");

//join
const fullPath = path.join("user", "work", "ex.txt");
console.log(fullPath);
// user\work\ex.txt

// 경로만 추출 - dirname
const dir = path.dirname(fullPath);
console.log(dir);
// user\work

// 파일 이름만 추출 - basename
const file = path.basename(__filename);
console.log(file);
// path.js

const file2 = path.basename(__filename, ".js");
console.log(file2);
// path
