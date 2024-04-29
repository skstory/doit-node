// HTTP 모듈로 서버 만들고 실행하기 (결과 비교 파일 : 04\results\server-1.js)

const http = require("http");

// 서버 만들기
const server = http.createServer((req, res) => {
  console.log("요청 발생");
  // 웹 브라우저에서 'http://localhost:3000/' 입력하면 '요청 발생' 뜸
});

// 실행
server.listen(3000, () => {
  console.log("서버 실행 중");
});
